import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type MemberProps = {
  name: string;
  designation: string;
  avatarSrc: string;
};

const MemberCard = ({ name, designation, avatarSrc }: MemberProps) => {
  return (
    <div className="flex items-center space-x-4 p-4 border border-gray-300 rounded-lg shadow-md bg-white">
      <Avatar className="w-16 h-16">
        <AvatarImage src={avatarSrc} alt={`${name}'s avatar`} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <span
          className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full ${
            designation === "Head" ? "bg-blue-500" : "bg-green-500"
          }`}
        >
          {designation}
        </span>
      </div>
    </div>
  );
};
export default MemberCard;
