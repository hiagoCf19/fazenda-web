import { MobileNavigator } from "../../_components/navigator.component";
import { ProducerHeader } from "../../_components/producer-header.component";
import { PendingApprovalBanner } from "./_components/banner.component";
import { TopicList } from "./_components/topic-list.component";

export function PendingApprovalComponent() {
  const topics = [
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

  return (
    <section>
      <ProducerHeader />
      <main className="space-y-4">
        <PendingApprovalBanner />
        <div className=" px-8 space-y-2">
          <h4 className="text-zinc-800 font-bold text-xl">
            Beneficios ao Produtor
          </h4>
          {/* cp */}
          {topics.map((topic) => (
            <TopicList key={topic.id} title={topic.title} text={topic.text} />
          ))}
        </div>
      </main>
      <MobileNavigator />
    </section>
  );
}
