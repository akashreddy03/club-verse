import { FaUserAlt } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

type PostProps = {
  username: string;
  timestamp: string;
  content: string;
};

export default function Post({ username, timestamp, content }: PostProps) {
  return (
    <div className="mx-4 my-4 gap-4 flex flex-col">
      <div className=" flex flex-row gap-3 items-center">
        <Avatar className="h-12 w-12">
          <AvatarImage src="" />
          <AvatarFallback>
            <FaUserAlt className="mt-4 ml-0 mx-0" size={40} color="gray" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold">{username}</span>
          <span className="text-slate-500">{timestamp}</span>
        </div>
      </div>
      <div className="break-words">{content}</div>
    </div>
  );
}
