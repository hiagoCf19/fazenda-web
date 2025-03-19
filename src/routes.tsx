import { createBrowserRouter } from "react-router";
import Dashboard from "./admin/dashboard/dashboard";
import Planos from "./admin/dashboard/example";
import AdminLayout from "./admin/layout/layout";
import { Login } from "./admin/login";

export const router = createBrowserRouter([
  {
    path: "admin",
    element: <AdminLayout />, // Renderiza o layout ao acessar /admin
    children: [
      {
        index: true, // Quando acessar /admin, renderiza algo dentro do layout
        element: <Dashboard />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "planos",
        element: <Planos />,
      },
    ],
  },
  {
    path: "admin/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
]);

// export const router = createBrowserRouter([
//   {
//     path: "admin",
//     element: <AdminLayout />,
//     children: [
//       {
//         path: "dashboard",
//         element: <Dashboard />,
//       },
//       {
//         path: "planos",
//         element: <Planos />,
//       },
//     ],
//   },
//   {
//     path: "/auth",
//     element: <Login />,
//   },
// ]);
