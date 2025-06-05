import { MobileNavigator } from "../../_components/navigator.producer.component";
import { HeaderProducer } from "../../_components/header.producer.component";
import { PendingApprovalBanner } from "./_components/banner.component";
import { TopicList } from "./_components/topic-list.component";
import { usePendingApprovalTopics } from "../../../hooks/use.pending-pproval-topics";

export function PendingApprovalComponent() {
  const { data: topics = [] } = usePendingApprovalTopics();

  return (
    <section>
      <HeaderProducer />

      <main className="space-y-4 md:mx-[200px] md:mt-10">
        <div className="md:flex items-center gap-4 hidden">
          <PulseDot />
          <h1 className="text-orange font-bold text-xl">
            Aguardando aprovação
          </h1>
        </div>
        <div className="md:flex justify-center items-center">
          <PendingApprovalBanner />
        </div>
        <div className="px-8 space-y-2 md:my-8">
          <h4 className="text-zinc-800 font-bold text-xl md:text-4xl md:mb-6">
            Benefícios ao Produtor
          </h4>

          <div className="md:flex justify-between gap-4 items-center">
            <div className="mb-4 space-y-4">
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

const PulseDot = () => (
  <div className="relative w-4 h-4">
    <div className="absolute inset-0 rounded-full bg-yellow-600 opacity-75 animate-ping" />
    <div className="relative w-2 h-2 top-[4px] left-[4px] rounded-full bg-yellow-400 shadow-md" />
  </div>
);
