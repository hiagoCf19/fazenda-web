import { useParams } from "react-router";
import { HeaderAuthenticaded } from "../_components/header-authenticated.component";
import { useSession } from "../context/session.context";
import { UnauthenticatedHeader } from "../_components/unauthenticated-header.component";
import { ProductCard } from "../(home)/_components/product-card.component";

export function SearchPage() {
  const { query } = useParams();
  const { session } = useSession();
  const mockResult = [
    {
      id: "1",
      name: "Milho verde",
      image:
        "https://s3-alpha-sig.figma.com/img/07a5/d27c/92c2a42fbde067277844b801722c9eea?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SMGotVqR7Kwt6rIh-3OoheDt4ze6pZrTgXZ96EaCBu9~Lo4YSwfJ7rcRoM0BAx6mPl2wlaMZdOzw7Zijhc41LWGzoD2I80k3nHqb5Vs6aGYtGDsfxf6cA2MQXAn8DtWAt7SFo4k7FDHfK26OMTIIPpJx8PA5oDj4Z6CNUQQgODuqjqoPLLGWjtB1WsZbfdseldipMvfGGAojFsKCHbjLCPG1Av883AHVHx6xFeTAIiS8YoK~1QlA9cyC0aVxsXqBNo7AsqVOdH-JUn97LTJm3zJsCrHCg7p~yVPRgpg-IHQDgIKV09tppFQb88ozthlr2H04wzkE6Bput~cQIgkp5A__", // You'll replace this with the actual image URL
      priceKg: "Kz 150/Kg",
      priceT: "Kz 130.000/T",
    },
  ];
  return (
    <section className="md:p-12 overflow-x-hidden relative min-h-screen ">
      {session ? (
        <HeaderAuthenticaded session={session} />
      ) : (
        <UnauthenticatedHeader />
      )}
      <div className="w-full md:h-[128px] h-[88px]" />
      <div className="space-y-6">
        <h2 className="text-4xl text-zinc-600 font-medium">
          Resultado da busca por {query}
        </h2>
        {mockResult.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
