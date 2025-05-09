import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";
import { SessionProvider } from "./application.client/context/session.context.tsx";
import { OpenOrdersProvider } from "./application.client/context/open-orders.context.tsx";
import { Toaster } from "./shadcn/ui/sonner.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <OpenOrdersProvider>
          <RouterProvider router={router} />
          <Toaster />
        </OpenOrdersProvider>
      </SessionProvider>
    </QueryClientProvider>
  </StrictMode>
);
