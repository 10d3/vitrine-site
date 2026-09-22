"use client";

import { Button } from "@/components/ui/button";
import { deleteBlog } from "@/lib/actions/BlogPostAction";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function DeleteButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleAction = async () => {
    if (confirm("¿Estás seguro de que deseas eliminar este artículo? Esta acción no se puede deshacer.")) {
      setIsDeleting(true);
      await deleteBlog(id);
      setIsDeleting(false);
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="icon"
      className="cursor-pointer text-muted-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50 transition-colors h-8 w-8" 
      onClick={handleAction}
      disabled={isDeleting}
      title="Eliminar Artículo"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
