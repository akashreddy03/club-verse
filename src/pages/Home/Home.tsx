import { Separator } from "@/components/ui/separator";
import NavBar from "./NavBar";
import Feed from "./Feed";

const Home = () => {
  return (
    <div className="inline-grid grid-flow-col">
      <NavBar />
      <Separator orientation="vertical" />
      <Feed />
      <Separator orientation="vertical" />
    </div>
  );
};

export default Home;
