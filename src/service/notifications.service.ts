// src/services/notifications.service.ts

export type NotificationRecipient =
  | "Todos"
  | "Clientes"
  | "Produtores"
  | "Entregadores";

export type Notification = {
  id: string;
  title: string;
  text: string;
  link?: string; // Link é opcional
  sentAt: string; // Data de envio (DD/MM/AAAA)
  recipient: NotificationRecipient;
};

// Simula um banco de dados em memória para os mocks
let mockNotifications: Notification[] = [
  {
    id: "notif_1",
    title: "Promoção de verão",
    text: "Aproveite os descontos especiais em produtos orgânicos!",
    link: "https://fazendaonline.com/promocoes/verao",
    sentAt: "10/09/2024",
    recipient: "Clientes",
  },
  {
    id: "notif_2",
    title: "Atualização de Termos de Uso",
    text: "Novas diretrizes para cadastro de produtos",
    link: "https://fazendaonline.com/termos-de-uso",
    sentAt: "10/09/2024",
    recipient: "Produtores",
  },
  {
    id: "notif_3",
    title: "Desconto de 25% em Vegetais",
    text: "Todos os produtos da categoria com desconto de até 25%",
    link: "https://fazendaonline.com/produtos/vegetais",
    sentAt: "10/09/2024",
    recipient: "Clientes",
  },
  {
    id: "notif_4",
    title: "Novidade: Agora temos Grãos!",
    text: "Verifique a nova categoria disponível",
    link: "https://fazendaonline.com/produtos/graos",
    sentAt: "10/09/2024",
    recipient: "Clientes",
  },
  {
    id: "notif_5",
    title: "Promoção relâmpago!",
    text: "Todos os produtos com até 10% de desconto!",
    link: "https://fazendaonline.com/promocoes/relampago",
    sentAt: "10/09/2024",
    recipient: "Clientes",
  },
];

// --- Funções do Serviço ---

// Simula a busca de todas as notificações
export async function getNotifications(): Promise<Notification[]> {
  const isDevelopmentIntegration =
    import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true";

  return new Promise((resolve) => {
    setTimeout(() => {
      // Simula um atraso de rede
      if (isDevelopmentIntegration) {
        resolve([...mockNotifications].reverse()); // Retorna uma cópia, invertido para os mais recentes primeiro
      } else {
        // TODO: Implementar chamada real à API
        console.warn("Implementar fetch real para /api/notifications");
        resolve([]); // Retorna vazio em produção se não houver API
      }
    }, 500); // 500ms de atraso
  });
}

// Simula a adição de uma nova notificação
export async function addNotification(
  newNotificationData: Omit<Notification, "id" | "sentAt">
): Promise<Notification> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newNotification: Notification = {
        id: `notif_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`, // ID único
        sentAt: format(new Date(), "dd/MM/yyyy"), // Data de envio atual
        ...newNotificationData,
      };
      mockNotifications.unshift(newNotification); // Adiciona no início para aparecer primeiro no histórico
      resolve(newNotification);
    }, 300);
  });
}

// Helper para formatar data (usado para sentAt)
import { format } from "date-fns";
