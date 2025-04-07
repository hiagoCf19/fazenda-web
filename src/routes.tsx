import { createBrowserRouter } from "react-router";
import Dashboard from "./admin/home/dashboard";
import AdminLayout from "./admin/home/layout/layout";
import { Login } from "./common/login/login.page";
import { Produtores } from "./admin/home/produtores";
import { Pedidos } from "./admin/home/pedidos";
import { Clientes } from "./admin/home/clientes";
import { Produtos } from "./admin/home/produtos";
import { HomePage } from "./web/(home)/home.page";
import { AccessPageWeb } from "./web/auth/access.page";
import { AuthLayout } from "./web/layout/auth.layout";
import { RegisterClientPage } from "./web/auth/register.page";
import { ConfirmOrderPage } from "./web/confirm-order/confirm-order.page";
import { MyOrders } from "./web/my-orders/my-orders.page";
import NotFound from "./web/_components/not-found.component";
import { PaymentMethodsPage } from "./web/payment-methods/payment-methods.page";
import { AddressPage } from "./web/adress/address.page";
import { SecurityPage } from "./web/security/security.page";
import { MyAccountPage } from "./web/my-account/my-account.page";
import { SearchPage } from "./web/search/search.page";

export const router = createBrowserRouter([
  // ROTAS DE ADMIN
  {
    path: "admin/login",
    element: <Login />, // Renderiza o layout ao acessar /admin
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
  // ROTAS DE USUARIO COMUM
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "login",
    element: <Login />,
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
    path: "confirm-order",
    element: <ConfirmOrderPage />,
  },
  {
    path: "my-orders",
    element: <MyOrders />,
  },
  {
    path: "payment-methods",
    element: <PaymentMethodsPage />,
  },
  {
    path: "address",
    element: <AddressPage />,
  },
  {
    path: "my-account",
    element: <MyAccountPage />,
  },
  {
    path: "security",
    element: <SecurityPage />,
  },
  {
    path: "search/:query",
    element: <SearchPage />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
