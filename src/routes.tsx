import { createBrowserRouter } from "react-router";

import { Login } from "./common/login/login.page";
import { ClientHomePage } from "./application.client/(home)/home.page";
import { AccessPageWeb } from "./common/login/landing-access.page";
import { AuthLayout } from "./application.client/layout/auth.layout";
import { ConfirmOrderPage } from "./application.client/confirm-order/confirm-order.page";
import { MyOrders } from "./application.client/my-orders/my-orders.page";
import NotFound from "./common/not-found.page";
import { PaymentMethodsPage } from "./application.client/payment-methods/payment-methods.page";
import { AddressPage } from "./application.client/adress/address.page";
import { SecurityPage } from "./application.client/security/security.page";
import { MyAccountPage } from "./application.client/profile-client/my-account.page";
import { SearchPage } from "./application.client/search/search.page";
import Dashboard from "./application.admin/dashboard/dashboard.page";
import { Pedidos } from "./application.admin/pedidos/pedidos.page";
import { Produtores } from "./application.admin/produtores/produtores.page";
import { Clientes } from "./application.admin/clientes/clientes.page";
import RegisterIndividualProfileForm from "./application.client/register/register-individual-profile.form";
import { RegisterBusinessProfileForm } from "./application.client/register/register-business-profile.form";
import ProducerPage from "./application.client/(home)/producer/[id]/producer.page";
import { SeeAllLayout } from "./application.client/(home)/see-all/(layout)/see-all.layout";
import { SeeAllProducts } from "./application.client/(home)/see-all/see-all-products.page";
import { mockProducts } from "./mock/mock";

import { ProfileProducer } from "./application.producer/profile/producer-profile.page";
import { RedirectByRole } from "./redirect";
import { HomePageProducer } from "./application.producer/(home)/home.page";
import AdminLayout from "./application.admin/home/home.layout";
import { OrdersProducerPage } from "./application.producer/orders/orders.producer.page";
import { ChooseClientType } from "./application.client/register/choose-client-type.page";
import RegisterProducerProfileForm from "./application.producer/register/register-producer.form";
import { UploadDocumentsPage } from "./application.producer/register/resgister-documents.page";
import MenuProducerPage from "./application.producer/menu/menu.producer.page";
import BusinessPage from "./application.producer/business/business.page";
import WalletPage from "./application.producer/business/wallet/wallet.page";
import ReportsEmissionPage from "./application.admin/relatorios/reportsEmissionPage.tsx";
import BannersPage from "./application.admin/banner/BannersPage.tsx";
import NotificationsPage from "./application.admin/notificacations/notificationsPage.tsx";
import UsersPage from "./application.admin/users/usersPage.tsx";
import { ProductPage } from "./application.admin/produtos/products.page.tsx";

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
        element: <ProductPage />,
      },
      {
        path: "produtos",
        element: <ProducerPage />,
      },
      {
        path: "emissao-relatorio",
        element: <ReportsEmissionPage />,
      },
      {
        path: "banners",
        element: <BannersPage />,
      },
      {
        path: "notificacao",
        element: <NotificationsPage />, // Supondo que exista uma página de notificações
      },
      {
        path: "usuarios",
        element: <UsersPage />,
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
        element: <ChooseClientType />,
      },
      {
        path: "client/business",
        element: <RegisterBusinessProfileForm />,
      },
      {
        path: "client/individual",
        element: <RegisterIndividualProfileForm />,
      },
      {
        path: "producer",
        element: <RegisterProducerProfileForm />, // futuro
      },
      {
        path: "producer/documents/:userId",
        element: <UploadDocumentsPage />,
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
    element: <HomePageProducer />,
  },
  {
    path: "/producer/profile",
    element: <ProfileProducer />,
  },
  {
    path: "/producer/orders",
    element: <OrdersProducerPage />,
  },
  {
    path: "producer/menu",
    element: <MenuProducerPage />,
  },
  {
    path: "producer/business",
    element: <BusinessPage />,
  },
  {
    path: "producer/business/wallet",
    element: <WalletPage />,
  },
]);
