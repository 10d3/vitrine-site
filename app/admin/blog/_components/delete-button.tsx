"use client";

import { Button } from "@/components/ui/button";
import { deleteBlog } from "@/lib/actions/BlogPostAction";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function DeleteButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleAction = async () => {
    if (confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
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
      title="Delete Article"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
