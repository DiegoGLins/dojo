import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignUp } from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

const RoutesApp: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;
