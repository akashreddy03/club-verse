import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useLayoutEffect, useRef } from "react";
import { FaUserAlt } from "react-icons/fa";

export default function MakePost() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function adjustHeight() {
    if (textareaRef.current !== undefined && textareaRef.current !== null) {
      textareaRef.current.style.height = "inherit";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }

  useLayoutEffect(adjustHeight, []);

  function handleKeyDown() {
    adjustHeight();
  }

  return (
    <div className="mx-4 my-4 flex flex-row items-start gap-1">
      <Avatar className="h-12 w-12">
        <AvatarImage src="" />
        <AvatarFallback>
          <FaUserAlt className="mt-4 ml-0 mx-0" size={40} color="gray" />
        </AvatarFallback>
      </Avatar>
      <div className="w-full mx-2">
        <Textarea
          placeholder="What is happening?"
          className="px-0 min-h-0 max-h-96 resize-none mb-3 border-none text-xl focus-visible:ring-transparent"
          rows={1}
          onChange={handleKeyDown}
          ref={textareaRef}
        />
        <Separator />
        <div className="mt-3 flex flex-row justify-between items-center">
          <h1>hello</h1>
          <Button className="rounded-full text-base">Post</Button>
        </div>
      </div>
    </div>
  );
}
