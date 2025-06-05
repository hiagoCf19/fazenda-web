export type Topic = {
  id: number;
  title: string;
  text: string;
};

export async function getPendingApprovalTopics(): Promise<Topic[]> {
  //TODO: import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true"
  if (true) {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return [
      {
        id: 1,
        title: "Aumente suas vendas",
        text: "Seus produtos podem ser comprados por \nqualquer usuário do aplicativo",
      },
      {
        id: 2,
        title: "Lucre mais",
        text: "Uma nova fonte de vendas para o seu negócio",
      },
      {
        id: 3,
        title: "Entrega por nossa conta",
        text: "Somos responsáveis por toda logística de \nentrega, sem você precisar se preocupar",
      },
      {
        id: 4,
        title: "Visibilidade para sua empresa",
        text: "Adicione informações ao seu perfil para que os \nusuários conheçam sua empresa e sua história",
      },
    ];
  } else {
    const response = await fetch("/api/pending-approval-topics");
    if (!response.ok) throw new Error("Erro ao buscar tópicos");
    return await response.json();
  }
}
