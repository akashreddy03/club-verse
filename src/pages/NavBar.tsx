import NavLink from "@/components/ui/NavLink";
import {
  AiOutlineCompass,
  AiOutlineHome,
  AiOutlineLock,
  AiOutlineProfile,
  AiOutlineSearch,
} from "react-icons/ai";

import { CgProfile } from "react-icons/cg";

const username = "dev2003";
// const clubname = "isf";

const links = [
  {
    text: "Home",
    route: "/",
    icon: <AiOutlineHome size={26} />,
  },
  {
    text: "Login",
    route: "/login",
    icon: <AiOutlineLock size={26} />,
  },
  {
    text: "Sign Up",
    route: "/signup",
    icon: <AiOutlineProfile size={26} />,
  },
  {
    text: "Explore",
    route: "",
    icon: <AiOutlineCompass size={26} />,
  },
  {
    text: "Search",
    route: "",
    icon: <AiOutlineSearch size={26} />,
  },
  {
    text: "Profile",
    route: `/u/${username}`,
    icon: <CgProfile size={26} />,
  },
];

export default function NavBar() {
  return (
    <div>
      <div className="sticky top-8 flex flex-col mx-2 gap-2 mt-8">
        <h1 className="px-4 text-2xl font-bold mb-6">LOGO</h1>
        {links.map((item, index) => (
          <NavLink key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
