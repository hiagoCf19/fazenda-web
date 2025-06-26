// src/services/users.service.ts

export type UserRole =
  | "Vendedor"
  | "Marketing"
  | "Admin"
  | "Entregador"
  | "Produtor"
  | "Cliente";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole; // Cargo/Função
  tempPassword?: string; // Senha temporária, opcional para exibição/envio
  isActive: boolean; // Se o usuário está ativo
};

// Simula um banco de dados em memória para os mocks
let mockUsers: User[] = [
  {
    id: "user_1",
    name: "Manuel Chimuco",
    email: "manuel.chimuco@empresa.co.ao",
    role: "Vendedor",
    isActive: true,
  },
  {
    id: "user_2",
    name: "Adélia Cambuta",
    email: "adelia.cambuta@empresa.co.ao",
    role: "Marketing",
    isActive: true,
  },
  {
    id: "user_3",
    name: "Ernesto Cassule",
    email: "ernesto.cassule@empresa.co.ao",
    role: "Admin",
    isActive: true,
  },
  {
    id: "user_4",
    name: "Rosa Mulanda",
    email: "rosa.mulanda@empresa.co.ao",
    role: "Vendedor",
    isActive: true,
  },
  {
    id: "user_5",
    name: "Elias Kiala",
    email: "elias.kiala@empresa.co.ao",
    role: "Marketing",
    isActive: false, // Exemplo de usuário inativo
  },
];

// --- Funções do Serviço ---

// Simula a busca de todos os usuários
export async function getUsers(): Promise<User[]> {
  const isDevelopmentIntegration =
    import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true";

  return new Promise((resolve) => {
    setTimeout(() => {
      // Simula um atraso de rede
      if (isDevelopmentIntegration) {
        resolve([...mockUsers]); // Retorna uma cópia
      } else {
        // TODO: Implementar chamada real à API
        console.warn("Implementar fetch real para /api/users");
        resolve([]);
      }
    }, 500); // 500ms de atraso
  });
}

// Simula a adição de um novo usuário
export async function addUser(
  newUserData: Omit<User, "id" | "isActive"> & { tempPassword?: string }
): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newUser: User = {
        id: `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`, // ID único
        isActive: true, // Novos usuários são ativos por padrão
        ...newUserData,
      };
      mockUsers.push(newUser);
      resolve(newUser);
    }, 300);
  });
}

// Simula a atualização do status 'isActive' de um usuário
export async function updateUserStatus(
  userId: string,
  isActive: boolean
): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userIndex = mockUsers.findIndex((u) => u.id === userId);
      if (userIndex > -1) {
        mockUsers[userIndex] = { ...mockUsers[userIndex], isActive };
        resolve(mockUsers[userIndex]);
      } else {
        reject(new Error("Usuário não encontrado"));
      }
    }, 200);
  });
}

// Simula a exclusão de um usuário
export async function deleteUser(userId: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const initialLength = mockUsers.length;
      mockUsers = mockUsers.filter((u) => u.id !== userId);
      if (mockUsers.length < initialLength) {
        resolve(userId); // Retorna o ID do usuário excluído
      } else {
        reject(new Error("Usuário não encontrado ou já excluído"));
      }
    }, 200);
  });
}
