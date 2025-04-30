import { createBrowserRouter } from "react-router";

import AdminLayout from "./application.admin/home/home.layout";
import { Login } from "./common/login/login.page";
import { HomePage } from "./application.web/(home)/home.page";
import { AccessPageWeb } from "./application.web/auth/access.page";
import { AuthLayout } from "./application.web/layout/auth.layout";
import { RegisterClientPage } from "./application.web/auth/register.page";
import { ConfirmOrderPage } from "./application.web/confirm-order/confirm-order.page";
import { MyOrders } from "./application.web/my-orders/my-orders.page";
import NotFound from "./common/not-found.page";
import { PaymentMethodsPage } from "./application.web/payment-methods/payment-methods.page";
import { AddressPage } from "./application.web/adress/address.page";
import { SecurityPage } from "./application.web/security/security.page";
import { MyAccountPage } from "./application.web/my-account/my-account.page";
import { SearchPage } from "./application.web/search/search.page";
import Dashboard from "./application.admin/dashboard/dashboard.page";
import { Pedidos } from "./application.admin/pedidos/pedidos.page";
import { Produtores } from "./application.admin/produtores/produtores.page";
import { Clientes } from "./application.admin/clientes/clientes.page";
import RegisterClientForm from "./application.web/auth/_components/register/individual-profile.form";
import { RegisterBusinessProfile } from "./application.web/auth/_components/register/business-profile.form";
import ProducerPage from "./application.web/(home)/producer/components/producer.page";
import { SeeAllLayout } from "./application.web/(home)/see-all/(layout)/see-all.layout";
import { SeeAllProducts } from "./application.web/(home)/see-all/see-all-products.page";
import { mockProducts } from "./mock/mock";

const best_selling_products = mockProducts;
const new_products = mockProducts;
export const router = createBrowserRouter([
  // ROTAS DE ADMIN
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
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
        element: <ProducerPage />,
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
        index: true, // opcional, se quiser que /register/client sem nada caia aqui
      },
      {
        path: "client/business",
        element: <RegisterBusinessProfile />,
      },
      {
        path: "client/individual",
        element: <RegisterClientForm />,
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
    path: "see-all",
    element: <SeeAllLayout />,
    children: [
      {
        path: "best-selling-products",
        element: <SeeAllProducts products={best_selling_products} />,
      },
      {
        path: "news",
        element: <SeeAllProducts products={new_products} />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/produtor/:slug", // Rota dinâmica para um produtor específico
    element: <ProducerPage />,
  },
]);
