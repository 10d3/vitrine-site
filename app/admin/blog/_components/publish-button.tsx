"use client";

import { Button } from "@/components/ui/button";
import { publishBlog } from "@/lib/actions/BlogPostAction";

export default function PublishButton({ id }: { id: string }) {
  const handleAction = async () => {
    await publishBlog(id);
  };
  return <Button onClick={handleAction}>Publish Blog</Button>;
}
