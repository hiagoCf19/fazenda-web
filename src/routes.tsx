import { createBrowserRouter } from "react-router";
import Dashboard from "./admin/home/dashboard";
import Planos from "./admin/home/pedidos";
import AdminLayout from "./admin/home/layout/layout";
import { AdminLogin } from "./admin/login";

export const router = createBrowserRouter([
  {
    path: "admin/login",
    element: <AdminLogin />, // Renderiza o layout ao acessar /admin
  },
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
        path: "pedidos",
        element: <Planos />,
      },
      {
        path: "produtores",
        element: <div>produtores</div>,
      },
      {
        path: "clientes",
        element: <div>Clientes</div>,
      },
      {
        path: "entregadores",
        element: <div>Entregadores</div>,
      },
      {
        path: "produtos",
        element: <div>produtos</div>,
      },
      {
        path: "emissao-relatorio",
        element: <div>Emissão de relatório</div>,
      },
      {
        path: "banners",
        element: <div>Banners</div>,
      },
      {
        path: "notificacao",
        element: <div>Notificações</div>,
      },
    ],
  },
  {
    path: "*",
    element: <div className="">404</div>,
  },
  /*  {
    path: "/",
    element: <Login />,
  }, */
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
