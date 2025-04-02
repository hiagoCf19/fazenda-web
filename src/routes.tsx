import { createBrowserRouter } from "react-router";
import Dashboard from "./admin/home/dashboard";
import AdminLayout from "./admin/home/layout/layout";
import { AdminLogin } from "./admin/login";
import { Produtores } from "./admin/home/produtores";
import { Pedidos } from "./admin/home/pedidos";
import { Clientes } from "./admin/home/clientes";
import { Produtos } from "./admin/home/produtos";
import { HomePage } from "./web/(home)/home.page";
import { AccessPageWeb } from "./web/auth/access.page";
import { AuthLayout } from "./web/layout/auth.layout";
import { RegisterClientPage } from "./web/auth/register.page";

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
        element: <Pedidos />,
      },
      {
        path: "produtores",
        element: <Produtores />,
      },
      {
        path: "clientes",
        element: <Clientes />,
      },
      {
        path: "entregadores",
        element: <div>Entregadores</div>,
      },
      {
        path: "produtos",
        element: <Produtos />,
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
    path: "/",
    element: <HomePage />,
  },
  {
    path: "landing-access",
    element: <AccessPageWeb />,
  },
  {
    path: "register",
    element: <AuthLayout />,
    children: [
      {
        path: "client",
        element: <RegisterClientPage />,
      },
      {
        path: "business",
        element: <div>empresa</div>,
      },
    ],
  },
  {
    path: "*",
    element: <div className="">404</div>,
  },
]);
