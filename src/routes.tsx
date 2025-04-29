import { createBrowserRouter } from "react-router";

import AdminLayout from "./admin/home/home.layout";
import { Login } from "./common/login/login.page";
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
import Dashboard from "./admin/dashboard/dashboard.page";
import { Pedidos } from "./admin/pedidos/pedidos.page";
import { Produtores } from "./admin/produtores/produtores.page";
import { Clientes } from "./admin/clientes/clientes.page";
import RegisterClientForm from "./web/auth/_components/register/individual-profile.form";
import { RegisterBusinessProfile } from "./web/auth/_components/register/business-profile.form";
import { RecommendedProductsPage } from "./web/(home)/recommended-products.page";
import { NewProductsPage } from "./web/(home)/new-products.page";
import { AllProducersPage } from "./web/(home)/all-producers.page";
import ProducerPage from "./web/(home)/producer/(id)/components/producer.page";
import { AllNews } from "./web/(home)/products/all-news";
import { AllPopulares } from "./web/(home)/products/all-products";

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
    path: "products/recommended",
    element: <RecommendedProductsPage />, // Página de produtos recomendados
  },
  {
    path: "products/new",
    element: <NewProductsPage />, // Página de novos produtos
  },
  {
    path: "producers",
    element: <AllProducersPage />, // Página de todos os produtores
  },

  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "Fazenda-esperanca",
    element: <ProducerPage />,
  },

  {
    path: "AllPopulares", // Lista de mais pedidos
    element: <AllPopulares />,
  },

  {
    path: "AllNews", // Lista de mais pedidos
    element: <AllNews />,
  },
  {
    path: "/produtor/:slug", // Rota dinâmica para um produtor específico
    element: <ProducerPage />,
  },
]);
