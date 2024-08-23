import { Separator } from "@/components/ui/separator";
import Feed from "./Feed";

const Home = () => {
  return (
    <div className="grid grid-flow-row">
      <Feed />
      <Separator orientation="vertical" />
    </div>
  );
};

export default Home;
