import { Separator } from "@/components/ui/separator";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div className="min-h-screen grid grid-flow-col grid-cols-[1fr_4fr_1fr]">
      <div className="grid grid-flow-col grid-cols-[1fr_0px]">
        <NavBar />
        <Separator orientation="vertical" />
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

export default Home;
