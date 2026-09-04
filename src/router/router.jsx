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
import Rider from "../pages/Rider/Rider";
import PrivateRouter from "./PrivateRouter";
import SendParcel from "../pages/sendParcel/SendParcel";

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
        path: "/send-parcel",
        element: <SendParcel />,
      },
      {
        path: "/become-a-rider",
        element: (
          <PrivateRouter>
            <Rider />
          </PrivateRouter>
        ),
      },
      {
        path: "/*",
        element: <Error404 />,
      },
    ],
  },
  // auth routes
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
