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

      <main className="space-y-4 md:mx-[200px] md:mt-10">
        <div className="md:flex items-center gap-4 hidden ">
          <PulseDot />
          <h1 className="text-orange font-bold text-xl">
            Aguardando aprovação
          </h1>
        </div>
        <div className="md:flex justify-center  items-center ">
          <PendingApprovalBanner />
        </div>
        <div className=" px-8 space-y-2 md:my-8">
          <h4 className="text-zinc-800 font-bold text-xl md:text-4xl md:mb-6">
            Beneficios ao Produtor
          </h4>
          {/* cp */}
          <div className="flex justify-between gap-4 items-center">
            <div className="space-y-6">
              {topics.slice(0, 2).map((topic) => (
                <TopicList
                  key={topic.id}
                  title={topic.title}
                  text={topic.text}
                />
              ))}
            </div>
            <div className="space-y-4">
              {topics.slice(2, 4).map((topic) => (
                <TopicList
                  key={topic.id}
                  title={topic.title}
                  text={topic.text}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <MobileNavigator />
    </section>
  );
}

import React from "react";

const PulseDot: React.FC = () => {
  return (
    <div className="relative w-4 h-4">
      {/* Outer pulsing ring */}
      <div className="absolute inset-0 rounded-full bg-yellow-600 opacity-75 animate-ping"></div>
      {/* Inner static dot */}
      <div className="relative w-2 h-2 top-[4px] left-[4px] rounded-full bg-yellow-400 shadow-md"></div>
    </div>
  );
};
