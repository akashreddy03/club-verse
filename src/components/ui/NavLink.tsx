import { Link } from "react-router-dom";

type NavLinkProps = {
  text: string;
  route: string;
};

export default function NavLink({ text, route }: NavLinkProps) {
  return (
    <Link to={route}>
      <div className="rounded-md px-4 py-3 hover:bg-zinc-100 text-xl font-semibold">
        {text}
      </div>
    </Link>
  );
}
