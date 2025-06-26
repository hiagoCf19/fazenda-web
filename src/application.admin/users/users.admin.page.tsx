// src/pages/UsersPage.tsx

"use client";

import React, { useState } from "react";
import { Edit, Trash, Eye, EyeOff } from "lucide-react"; // Importar Eye e EyeOff aqui

// Shadcn UI Components
import { Card, CardContent, CardHeader, CardTitle } from "../../shadcn/ui/card";
import { Label } from "../../shadcn/ui/label";
import { Input } from "../../shadcn/ui/input";
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
import { Switch } from "../../shadcn/ui/switch";

// Hook de Usuários
import { useUsers } from "../../hooks/use.users";
import { UserRole } from "../../service/users.service";
import { Separator } from "../../shadcn/ui/separator";

const UsersPage = () => {
  // --- Estados do Formulário "Adicionar novo" ---
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  // NOVO ESTADO: Para controlar a visibilidade da senha
  const [showTempPassword, setShowTempPassword] = useState(false);

  // --- Hook para a lista de usuários ---
  const {
    users,
    isLoadingUsers,
    isErrorUsers,
    usersError,
    addUser,
    updateUserStatus,
    deleteUser,
    isAddingUser,
    isUpdatingUserStatus,
    isDeletingUser,
  } = useUsers();

  // --- Funções de Ação ---
  const handleSubmitUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName || !email || !role || !tempPassword) {
      alert("Por favor, preencha todos os campos para adicionar o usuário.");
      return;
    }

    addUser(
      {
        name: userName,
        email,
        role: role as UserRole,
        tempPassword,
      },
      {
        onSuccess: () => {
          alert("Usuário adicionado com sucesso!");
          setUserName("");
          setEmail("");
          setRole("");
          setTempPassword("");
          setShowTempPassword(false); // Resetar visibilidade da senha
        },
        onError: (error) => {
          alert(`Erro ao adicionar usuário: ${error.message}`);
        },
      }
    );
  };

  const handleDelete = (userId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      deleteUser(userId);
    }
  };

  return (
    <section className="space-y-6 md:space-y-8 pb-8">
      {/* <HeaderProducer /> */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-zinc-800 mb-6">Usuários</h1>

        {/* --- Seção "Adicionar novo" --- */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-green-600">
              Adicionar novo
            </CardTitle>
            <p className="text-sm text-zinc-500 mt-1">
              O usuário receberá um convite de acesso no email cadastrado.
            </p>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmitUser}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Nome do usuário */}
              <div className="space-y-2">
                <Label htmlFor="userName">Nome do usuário</Label>
                <Input
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Nome completo"
                  required
                />
              </div>

              {/* Cargo/Função */}
              <div className="space-y-2">
                <Label htmlFor="role">Cargo/Função</Label>
                <Input
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Título da função"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@mail.com"
                  required
                />
              </div>

              {/* Senha temporária - AGORA COM BOTÃO DE VER SENHA */}
              <div className="space-y-2">
                <Label htmlFor="tempPassword">Senha temporária</Label>
                <div className="relative">
                  {" "}
                  {/* Torna este div o container para posicionamento absoluto */}
                  <Input
                    id="tempPassword"
                    // Altera o tipo do input com base no estado 'showTempPassword'
                    type={showTempPassword ? "text" : "password"}
                    value={tempPassword}
                    onChange={(e) => setTempPassword(e.target.value)}
                    placeholder=""
                    required
                    className="pr-10" // Adiciona padding à direita para o ícone não cobrir o texto
                  />
                  {/* Botão para alternar a visibilidade da senha */}
                  <Button
                    type="button" // MUITO IMPORTANTE: Garante que o botão não envie o formulário
                    variant="ghost" // Estilo fantasma para que seja apenas um ícone
                    size="icon" // Tamanho de ícone padrão
                    // Posicionamento absoluto dentro do div relativo
                    className="absolute right-0 top-0 h-full px-3 py-1 text-muted-foreground hover:bg-transparent"
                    onClick={() => setShowTempPassword((prev) => !prev)} // Alterna o estado
                  >
                    {/* Altera o ícone com base no estado */}
                    {showTempPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Botão Enviar */}
              <div className="md:col-span-2 flex justify-end mt-4">
                <Button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-2"
                  disabled={isAddingUser}
                >
                  {isAddingUser ? "Enviando..." : "Enviar"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <Separator />
        {/* --- Seção "Cadastrados" --- */}
        <h2 className="text-xl font-bold text-zinc-800 mb-4 pt-6">
          Cadastrados
        </h2>
        <Card>
          <CardContent className="">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="">
                  <TableRow>
                    <TableHead className="text-zinc-600 text-left w-[180px]">
                      Nome
                    </TableHead>
                    <TableHead className="text-zinc-600 text-left flex-1">
                      Email
                    </TableHead>
                    <TableHead className="text-zinc-600 text-left w-[120px]">
                      Cargo
                    </TableHead>
                    <TableHead className="text-zinc-600 text-center w-[160px]">
                      Ações
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoadingUsers ? (
                    Array.from({ length: 5 }).map((_, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <Skeleton className="h-4 w-[150px]" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-full" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-[100px]" />
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex justify-center gap-2">
                            <Skeleton className="h-6 w-12" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : isErrorUsers ? (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="text-center text-red-500 py-4"
                      >
                        Erro ao carregar usuários: {usersError?.message}
                      </TableCell>
                    </TableRow>
                  ) : users && users.length > 0 ? (
                    users.map((user) => (
                      <TableRow key={user.id} className="hover:bg-zinc-50">
                        <TableCell className="font-medium text-zinc-800 w-[180px] truncate">
                          {user.name}
                        </TableCell>
                        <TableCell className="text-zinc-700 flex-1 truncate">
                          {user.email}
                        </TableCell>
                        <TableCell className="text-zinc-700 w-[120px]">
                          {user.role}
                        </TableCell>
                        <TableCell className="text-center w-[160px]">
                          <div className="flex items-center justify-center gap-2">
                            <Label className="text-xs text-zinc-600">
                              {user.isActive ? "Ativo" : "Inativo"}
                            </Label>
                            <Switch
                              checked={user.isActive}
                              onCheckedChange={(checked) =>
                                updateUserStatus({
                                  id: user.id,
                                  isActive: checked,
                                })
                              }
                              disabled={isUpdatingUserStatus}
                              className="data-[state=checked]:bg-green-500"
                            />

                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 bg-green-500 hover:bg-green-600 text-white"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>

                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 bg-red-500 hover:bg-red-600 text-white"
                              onClick={() => handleDelete(user.id)}
                              disabled={isDeletingUser}
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        className="text-center text-zinc-500 py-4"
                      >
                        Nenhum usuário encontrado.
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

export default UsersPage;
