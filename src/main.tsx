import React from "react";
import ReactDOM from "react-dom/client";

import Root from "./pages/Root";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Search from "./pages/Search";
import Layout from "./components/Layout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Details from "./pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        {" "}
        <Root />
      </Layout>
    ),
  },
  {
    path: "/search",
    element: (
      <Layout>
        {" "}
        <Search />
      </Layout>
    ),
  },
  {
    path: "/movie/:id",
    element: (
      <Layout>
        {" "}
        <Details />
      </Layout>
    ),
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} /> /
    </QueryClientProvider>
  </React.StrictMode>,
);
