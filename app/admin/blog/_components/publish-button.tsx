"use client";

import { Button } from "@/components/ui/button";
import { draftBlog, publishBlog } from "@/lib/actions/BlogPostAction";

export default function PublishButton({ id, published }: { id: string, published: boolean }) {
  const handleAction = async () => {
    if(published) {
      await draftBlog(id);
    } else {
      await publishBlog(id);
    }
  };
  return <Button className="cursor-pointer" onClick={handleAction}>{`${published ? "Draft" : "Publish"} Blog`}</Button>;
}
