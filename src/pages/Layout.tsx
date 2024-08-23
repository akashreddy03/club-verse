import { Separator } from "@/components/ui/separator";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="inline-grid grid-flow-col w-full grid-cols-[auto_auto_1fr]">
      <NavBar />
      <Separator orientation="vertical" />
      <Outlet />
    </div>
  );
}
