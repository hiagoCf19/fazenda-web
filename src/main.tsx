import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes.tsx";
import { SessionProvider } from "./web/context/session.context.tsx";
import { OpenOrdersProvider } from "./web/context/open-orders.context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SessionProvider>
      <OpenOrdersProvider>
        <RouterProvider router={router} />
      </OpenOrdersProvider>
    </SessionProvider>
  </StrictMode>
);
