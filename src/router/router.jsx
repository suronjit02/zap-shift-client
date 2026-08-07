import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import Error404 from "../pages/Error404.jsx/Error404";
import AboutUs from "../pages/AboutPage/AboutUs";

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
]);
