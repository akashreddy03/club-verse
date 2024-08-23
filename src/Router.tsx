import { createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/UserProfile/ProfileUser";
import ClubProfileCard from "./pages/ClubProfile/Profile";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },

      {
        path: "/u/:username",
        element: <UserProfile />,
      },
      {
        path: "/c/:clubid",
        element: <ClubProfileCard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
