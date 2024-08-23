import { Separator } from "@/components/ui/separator";
import Feed from "./Feed";

const Home = () => {
  return (
    <div className="inline-grid grid-flow-col grid-cols-[max-content_max-content]">
      <Feed />
      <Separator orientation="vertical" className="w-0.5" />
    </div>
  );
};

export default Home;
