"use client";

import React, { useState } from "react";

// Shadcn UI Components
import { Card, CardContent, CardHeader, CardTitle } from "../../shadcn/ui/card";
import { Label } from "../../shadcn/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../shadcn/ui/select";
import { Input } from "../../shadcn/ui/input";
import { Textarea } from "../../shadcn/ui/textarea"; // Para o campo 'Texto'
import { Button } from "../../shadcn/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../shadcn/ui/table";
import { Skeleton } from "../../shadcn/ui/skeleton";

// Hook de Notificações
import { useNotifications } from "../../hooks/use.notifications";
import type { NotificationRecipient } from "../../service/notifications.service";
import { Separator } from "../../shadcn/ui/separator";
const NotificationsPage = () => {
  // --- Estados do Formulário "Adicionar nova" ---
  const [recipient, setRecipient] = useState<NotificationRecipient | "">(""); // Destinatário selecionado
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");

  // --- Hook para o histórico de notificações ---
  const {
    notifications,
    isLoadingNotifications,
    isErrorNotifications,
    notificationsError,
    addNotification,
    isAddingNotification,
  } = useNotifications();

  // --- Funções de Ação ---
  const handleSubmitNotification = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient || !title || !text) {
      // Validação básica
      alert(
        "Por favor, preencha o destinatário, título e texto da notificação."
      );
      return;
    }

    addNotification(
      {
        recipient: recipient as NotificationRecipient, // Força o tipo após validação
        title,
        text,
        link: link || undefined, // Envia undefined se o link estiver vazio
      },
      {
        onSuccess: () => {
          alert("Notificação enviada com sucesso!"); // Substituir por toast
          // Limpa o formulário após o envio
          setRecipient("");
          setTitle("");
          setText("");
          setLink("");
        },
        onError: (error) => {
          alert(`Erro ao enviar notificação: ${error.message}`); // Substituir por toast
        },
      }
    );
  };

  return (
    <section className="space-y-6 md:space-y-8 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-zinc-800 mb-6">Notificações</h1>

        {/* --- Seção "Adicionar nova" --- */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-green-600">
              Adicionar nova
            </CardTitle>{" "}
            {/* Título verde */}
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmitNotification}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Destinatário */}
              <div className="space-y-2">
                <Label htmlFor="recipient">Destinatário</Label>
                <Select
                  value={recipient}
                  onValueChange={(value) =>
                    setRecipient(value as NotificationRecipient)
                  }
                >
                  <SelectTrigger
                    id="recipient"
                    className="w-full rounded-md border-gray-300"
                  >
                    <SelectValue placeholder="Selecione destinatários" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    <SelectItem value="Clientes">Clientes</SelectItem>
                    <SelectItem value="Produtores">Produtores</SelectItem>
                    <SelectItem value="Entregadores">Entregadores</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Título */}
              <div className="space-y-2 ">
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Título da notificação"
                  required
                  className="w-full rounded-md border-gray-300"
                />
              </div>

              {/* Texto */}
              <div className="space-y-2 md:col-span-1">
                {/* Ocupa uma coluna em telas médias+ */}
                <Label htmlFor="text">Texto</Label>
                <Textarea
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Mensagem da notificação"
                  rows={4} // Controla a altura
                  required
                  className="w-full rounded-md border-gray-300"
                />
              </div>

              {/* Link */}
              <div className="space-y-2 md:col-span-1">
                {" "}
                {/* Ocupa uma coluna em telas médias+ */}
                <Label htmlFor="link">Link</Label>
                <Input
                  id="link"
                  type="url" // Tipo URL para validação básica
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="https://"
                  className="w-full rounded-md border-gray-300"
                />
              </div>

              {/* Botão Salvar */}
              <div className="md:col-span-2 flex justify-end mt-4">
                {/* Ocupa 2 colunas e alinha à direita */}
                <Button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-2"
                  disabled={isAddingNotification}
                >
                  {isAddingNotification ? "Salvando..." : "Salvar"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <Separator />
        {/* --- Seção Histórico --- */}
        <h2 className="text-xl font-bold text-zinc-800 mb-4 pt-6">Histórico</h2>
        <Card className=" mt-5 pt-4">
          <CardContent className="p-1">
            {/* Remove padding da CardContent para a tabela */}
            <div className="overflow-x-auto  ">
              {/* Adiciona scroll horizontal para tabelas grandes */}
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-zinc-400 text-left w-[200px]">
                      Título
                    </TableHead>
                    {/* Largura para título */}
                    <TableHead className="text-zinc-600 text-left flex-1">
                      Texto
                    </TableHead>{" "}
                    {/* Texto pode ocupar mais espaço */}
                    <TableHead className="text-zinc-600 text-left w-[120px]">
                      Data de envio
                    </TableHead>
                    <TableHead className="text-zinc-600 text-left w-[120px]">
                      Destinatário
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="">
                  {isLoadingNotifications ? (
                    // Skeletons durante o carregamento
                    Array.from({ length: 5 }).map((_, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <Skeleton className="h-4 w-[180px]" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-full" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-[100px]" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-[100px]" />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : isErrorNotifications ? (
                    // Mensagem de erro
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="text-center text-red-500 py-4"
                      >
                        Erro ao carregar notificações:{" "}
                        {notificationsError?.message}
                      </TableCell>
                    </TableRow>
                  ) : notifications && notifications.length > 0 ? (
                    // Dados do histórico
                    notifications.map((notification) => (
                      <TableRow
                        key={notification.id}
                        className="hover:bg-zinc-50"
                      >
                        <TableCell className="font-medium text-zinc-800 w-[200px]">
                          {notification.title}
                        </TableCell>
                        <TableCell className="text-zinc-700 flex-1">
                          {notification.text}
                        </TableCell>
                        <TableCell className="text-zinc-700 w-[120px]">
                          {notification.sentAt}
                        </TableCell>
                        <TableCell className="text-zinc-700 w-[120px]">
                          {notification.recipient}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    // Sem notificações no histórico
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="text-center text-zinc-500 py-4"
                      >
                        Nenhuma notificação encontrada.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NotificationsPage;
