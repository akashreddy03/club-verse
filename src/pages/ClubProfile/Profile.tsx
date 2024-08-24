import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const ClubProfileCard = () => {
  const { clubid } = useParams();
  const displayedUserName = clubid || "ISF";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="relative h-32 sm:h-40 md:h-48 lg:h-64 bg-cover bg-center rounded-t-lg"
        style={{
          backgroundImage:
            "url(https://vbithyd.ac.in/wp-content/uploads/2022/12/IETE.jpg)",
        }}
      >
        {/* Profile Image Section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <img
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white shadow-lg"
            src="https://www.sia-india.com/wp-content/uploads/2022/06/IETE.jpg"
            alt="Profile"
          />
        </div>
      </div>

      {/* Profile Information Section */}
      <div className="bg-white text-gray-900 w-full sm:w-11/12 md:w-4/5 lg:w-3/5 border border-gray-300 rounded-lg shadow-md mt-16 mx-auto p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 border-b border-gray-200">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
            {displayedUserName}
          </h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="mt-4 sm:mt-0">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make Changes to your Profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue={displayedUserName}
                    className="col-span-3"
                  ></Input>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit"> Save Changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex justify-around px-4 py-2 border-b border-gray-200">
          <p className="text-center">No Posts</p>
          <p className="text-center">Following</p>
          <p className="text-center">Followers</p>
        </div>
        <div className="px-4 py-5">
          <p>Club Information goes here...</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-4">
        <Tabs defaultValue="core-committee" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="core-committee">Core Committee</TabsTrigger>
            <TabsTrigger value="coordinators">Coordinators</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
          <TabsContent value="core-committee">
            {/* Content for Core Committee */}
          </TabsContent>
          <TabsContent value="coordinators">
            {/* Content for Coordinators */}
          </TabsContent>
          <TabsContent value="events">{/* Content for Events */}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClubProfileCard;
