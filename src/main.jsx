import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Blogs from "./Pages/Blogs.jsx";
import Bookmarks from "./Pages/Bookmarks.jsx";
import Home from "./Pages/Home.jsx";
import Hero from "./Coponents/Hero.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <h1>Not found</h1>,
    children: [
      {
        index: true,
        element: <Hero></Hero>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
