import { createBrowserRouter } from "react-router";

import { Login } from "./common/login/login.page";
import { ClientHomePage } from "./application.client/(home)/home.page";
import { AccessPageWeb } from "./application.client/auth/access.page";
import { AuthLayout } from "./application.client/layout/auth.layout";
import { RegisterClientPage } from "./application.client/auth/register.page";
import { ConfirmOrderPage } from "./application.client/confirm-order/confirm-order.page";
import { MyOrders } from "./application.client/my-orders/my-orders.page";
import NotFound from "./common/not-found.page";
import { PaymentMethodsPage } from "./application.client/payment-methods/payment-methods.page";
import { AddressPage } from "./application.client/adress/address.page";
import { SecurityPage } from "./application.client/security/security.page";
import { MyAccountPage } from "./application.client/profile-client/profile-client.page";
import { SearchPage } from "./application.client/search/search.page";
import Dashboard from "./application.admin/dashboard/dashboard.page";
import { Pedidos } from "./application.admin/pedidos/pedidos.page";
import { Produtores } from "./application.admin/produtores/produtores.page";
import { Clientes } from "./application.admin/clientes/clientes.page";
import RegisterClientForm from "./application.client/auth/_components/register/individual-profile.form";
import { RegisterBusinessProfile } from "./application.client/auth/_components/register/business-profile.form";
import ProducerPage from "./application.client/(home)/producer/components/producer.page";
import { SeeAllLayout } from "./application.client/(home)/see-all/(layout)/see-all.layout";
import { SeeAllProducts } from "./application.client/(home)/see-all/see-all-products.page";
import { mockProducts } from "./mock/mock";

import { ProfileProducer } from "./application.producer/profile/profile-producer.page";
import { RedirectByRole } from "./redirect";
import { ProducerHomePage } from "./application.producer/(home)/home.page";
import AdminLayout from "./application.admin/home/home.layout";

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
  {
    path: "/",
    element: <RedirectByRole />, // ✅ não chama como função, apenas referência o componente
  },

  //ROTAS DE AUTH
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

  //ROTAS DE CLIENT
  {
    path: "/client",
    element: <ClientHomePage />,
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
  // ROTAS DE PRODUCER

  {
    path: "producer",
    element: <ProducerHomePage />,
  },
  {
    path: "/producer/profile",
    element: <ProfileProducer />,
  },
]);
