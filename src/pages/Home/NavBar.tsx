import NavLink from "@/components/ui/NavLink";

const links = [
  {
    text: "Home",
    route: "/",
  },
  {
    text: "Login",
    route: "/login",
  },
  { text: "Sign Up", route: "/signup" },
  {
    text: "Explore",
    route: "",
  },
  {
    text: "Search",
    route: "",
  },
];

export default function NavBar() {
  return (
    <div className="flex flex-col mx-2 gap-2 mt-8">
      <h1 className="px-4 text-2xl font-bold mb-6">LOGO</h1>
      {links.map((item) => (
        <NavLink {...item} />
      ))}
    </div>
  );
}
