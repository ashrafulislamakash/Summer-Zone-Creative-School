import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

import "./index.css";
import { router } from "./routes/routes.jsx";
import AuthProvider from "./providers/AuthProvider";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
