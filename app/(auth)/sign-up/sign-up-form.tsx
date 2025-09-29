"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signupUser } from "@/lib/auth/auth-action";

export function SignupForm({ className }: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // États des données du formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError(null);

    // Validation des champs
    if (!name || !email || !password) {
      setFormError("Veuillez remplir tous les champs obligatoires");
      setIsLoading(false);
      return;
    }

    try {
      // Inscription de l'utilisateur
      const formDataObj = new FormData();
      formDataObj.append("name", name);
      formDataObj.append("email", email);
      formDataObj.append("password", password);

      const result = await signupUser(formDataObj);
      if (!result.success) {
        toast.error(
          result.message || "Une erreur s'est produite lors de l'inscription"
        );
      } else {
        toast.success(
          "Compte créé avec succès ! Vous pouvez maintenant vous connecter."
        );

        // Redirection vers la page de connexion
        setTimeout(() => {
          router.push("/sign-in");
        }, 2000);
      }
    } catch (error: unknown) {
      console.error("Erreur d'inscription :", error);
      setFormError(
        "Quelque chose s'est mal passé. Veuillez réessayer plus tard."
      );
      toast.error("Quelque chose s'est mal passé", {
        description: "Veuillez réessayer plus tard.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className={cn("flex flex-col gap-6 ", className)}>
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Créer votre compte</CardTitle>
            <CardDescription>
              Inscrivez-vous pour commencer à utiliser notre plateforme
            </CardDescription>
          </CardHeader>
          <CardContent>
            {formError && (
              <div className="bg-destructive/15 text-destructive p-3 rounded-md mb-4 text-sm">
                {formError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jean Dupont"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vous@example.com"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  minLength={8}
                />
                <p className="text-xs text-muted-foreground">
                  Le mot de passe doit contenir au moins 8 caractères
                </p>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Création du compte..." : "Créer un compte"}
              </Button>

              <div className="text-center text-sm mt-6">
                Vous avez déjà un compte ?{" "}
                <Link href="/login" className="underline underline-offset-4">
                  Se connecter
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
