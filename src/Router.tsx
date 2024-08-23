import { createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
// import ProfileCard from "./pages/ClubProfile/Profile";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/UserProfile/ProfileUser";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/profileuser/:studentName/:userId/:batch",
    element: <UserProfile />,
  },
]);

export default router;
