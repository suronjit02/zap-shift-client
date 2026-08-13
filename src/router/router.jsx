import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import Error404 from "../pages/Error404.jsx/Error404";
import AboutUs from "../pages/AboutPage/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ForgotPass from "../pages/Auth/ForgetPass/ForgotPass";
import EnterCode from "../pages/Auth/ForgetPass/EnterCode";
import ResetPass from "../pages/Auth/ForgetPass/ResetPass";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/coverage",
        element: <Coverage />,
        loader: () => fetch("/warehouses.json").then((res) => res.json()),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/*",
        element: <Error404 />,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "forgot-password",
        Component: ForgotPass,
      },
      {
        path: "enter-code",
        Component: EnterCode,
      },
      {
        path: "reset-password",
        Component: ResetPass,
      },
    ],
  },
]);
