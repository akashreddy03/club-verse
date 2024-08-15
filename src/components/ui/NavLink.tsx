import { Link } from "react-router-dom";

type NavLinkProps = {
  text: string;
  route: string;
  icon?: React.ReactNode;
};

export default function NavLink({ text, route, icon }: NavLinkProps) {
  return (
    <Link to={route}>
      <div className="flex flex-row items-center gap-4 rounded-md px-4 md:pr-24 py-3 hover:bg-zinc-100 justify-center md:justify-start">
        {icon}
        <span className="text-xl hidden md:inline">{text}</span>
      </div>
    </Link>
  );
}
