import Post from "@/components/ui/Post";
import { Separator } from "@/components/ui/separator";
import React from "react";
import MakePost from "./MakePost";

export default function Feed() {
  return (
    <div className="max-w-2xl">
      <MakePost />
      <Separator />
      {[...Array(10).keys()].map((item) => (
        <React.Fragment key={item}>
          <Post
            username="hello"
            timestamp="a day ago"
            content="Sint dolor labore quis ad aute reprehenderit laboris adipisicing excepteur ex. Laborum deserunt est in dolore nostrud veniam duis ullamco in. Proident consectetur adipisicing et fugiat enim nisi aliqua. Commodo esse exercitation sunt magna enim ad nisi enim esse commodo. Proident veniam deserunt dolor laborum elit non consectetur eu aliqua occaecat mollit dolore adipisicing. Pariatur veniam eiusmod voluptate consequat ipsum cillum amet commodo est elit proident in."
          />
          <Separator className="h-0.5" />
        </React.Fragment>
      ))}
    </div>
  );
}
