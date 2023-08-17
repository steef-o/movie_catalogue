import React from "react";
import ReactDOM from "react-dom/client";

import Root from "./pages/Root";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Search from "./pages/Search";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
    <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
);
