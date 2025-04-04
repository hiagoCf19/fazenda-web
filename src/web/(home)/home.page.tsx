import { Producer } from "../../../types/producer";
import { ChooseByCategory } from "./_components/choose-by-category.component";
import { ProductList } from "./_components/product-list.component";
import { ProducersList } from "./_components/producers.component";
import { useSession } from "../context/session.context";
import BottomNav from "../_components/bottom-navigator-mobile.component";
import { HeaderAuthenticaded } from "../_components/header-authenticated.component";
import { Footer } from "./_components/footer.component";
import { UnauthenticatedHeader } from "../_components/unauthenticated-header.component";
import { Banners } from "./_components/banners.component";

export const HomePage = () => {
  const { session } = useSession();
  //TODO: durante a integração buscar o user na api com o id

  const categories = [
    {
      category: "Vegetais",
      image: "/carrot.png",
    },
    {
      category: "Frutas",
      image: "/apple.png",
    },
    {
      category: "Carnes",
      image: "/meat.png",
    },
    {
      category: "Peixes",
      image: "/fish.png",
    },
    {
      category: "Vegetais",
      image: "/vegetable.png",
    },
    {
      category: "Vegetais",
      image: "/carrot.png",
    },
    {
      category: "Frutas",
      image: "/apple.png",
    },
    {
      category: "Carnes",
      image: "/meat.png",
    },
    {
      category: "Peixes",
      image: "/fish.png",
    },
  ];
  const products = [
    {
      id: "1",
      name: "Milho verde",
      image:
        "https://s3-alpha-sig.figma.com/img/07a5/d27c/92c2a42fbde067277844b801722c9eea?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SMGotVqR7Kwt6rIh-3OoheDt4ze6pZrTgXZ96EaCBu9~Lo4YSwfJ7rcRoM0BAx6mPl2wlaMZdOzw7Zijhc41LWGzoD2I80k3nHqb5Vs6aGYtGDsfxf6cA2MQXAn8DtWAt7SFo4k7FDHfK26OMTIIPpJx8PA5oDj4Z6CNUQQgODuqjqoPLLGWjtB1WsZbfdseldipMvfGGAojFsKCHbjLCPG1Av883AHVHx6xFeTAIiS8YoK~1QlA9cyC0aVxsXqBNo7AsqVOdH-JUn97LTJm3zJsCrHCg7p~yVPRgpg-IHQDgIKV09tppFQb88ozthlr2H04wzkE6Bput~cQIgkp5A__", // You'll replace this with the actual image URL
      priceKg: "Kz 150/Kg",
      priceT: "Kz 130.000/T",
    },
    {
      id: "2",
      name: "Lentilha",
      image:
        "https://s3-alpha-sig.figma.com/img/df2a/1de6/e6da096563c5a5f4f514c7b9dd692e32?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jEHbbphus7ng6wupEN8GIjX2q3nh8ljCdf7xqhh5ADch5DuY49fqcbaB94k3YqkArIfX9gKkluqgzpsA~KidNRxg5L8sO-uniCYvHhSkqW-4MLRdBeTCgo1tRaqDt0PDSeBUgYwAorieDRw2IIxwT62j6aPgrbT-HsKZ-9Mw0aC9WDSVEUronkpqjTdEZC29apH-mwlybXXsK2PYCHBBXFhSrmx5b6tytcn~UYmBJyX0OuQ42XtOGbippKq4eOKMJsq-oEJeiaam7IgjIkcZGThEwhLgrd5N7A~8sfsM2tzZFjkgsZVP2AhVsAtFFqNIChgWsikk8SfzL2EU-3Jkjg__", // You'll replace this with the actual image URL
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "3",
      name: "Bacalhau",
      image:
        "https://s3-alpha-sig.figma.com/img/85d3/2778/38617ed4ff0eed4b742baafbb974d51b?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p1PGaK6s7N6NCimDrhJOyZ-8S9ZuEYqx7RRNWsw~5PZYGj9tgkgsutAxGTwDgw4~Pcl8ISkjennDDsKIJ9o3cJ6puvBirBWFhnydj1OlQmCJW3-ll6248oO0HdPVk-o~KFFV~36jYJ~HafiqlXRd1r~-daeQtkxPjDyx3MoDXq9s7FEHfigCWgo9vVdbK9zsjD-3olhWzZbRPDfJJXlJRGTNKete29E0PiTYZhkQksvmHa-JpFdlvKz6qmpdAdwTaK02~SKuSgsplLNMlwBrkxLOaJ395VS16P2wQocrujvFGCJsmLNjRqkx~mjhJozt7Y41s3wfH2WiCGXLXPTnfw__", // You'll replace this with the actual image URL
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
    {
      id: "4",
      name: "Noz pecan",
      image:
        "https://s3-alpha-sig.figma.com/img/93fd/b512/da12e37e7adf5d2b497f32ca1221c53f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Pj5tPI6dVTEJi07ZUpAFyb-5iMh-lK~hDIEVDeVro0AaEipZdz-LfdJkxxYvCaQ13-7kExLcTbwGvGjCkIzr2nh1lykoIrPlWuNDYWrYCp0OjxSZcLJQBv0DyhjcIXLm4G7tT905Zm2QFLVqOec7XyWEC8mW2uiVrNgU8jvbDkwL4LzbmKUkWgTEfUjHV3Zx9AWtBrN4TVmLQ0tiVOK1qEttQrsvijvV4XB08OYRaxl~WEQkksG-9kGbtzEbHbvPdSgTZXuU67Ck2zIcRA~4lNdHj72vFNrXNGzEOamvzBJySD6zko-ylLvkcxaRUqKb~CN2-p2DCSHN8ZaUjiGoIw__", // You'll replace this with the actual image URL
      priceKg: "Kz 2.850/Kg",
      priceT: "Kz 2.800.000/T",
    },
    {
      id: "5",
      name: "Melancia",
      image:
        "https://s3-alpha-sig.figma.com/img/7f12/78a6/cae0934e6f1d47bc85d52fe98d8ba5b5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RFu~D4Jffl0YI1WXv12gvRlbgXlXK~ElBCjf8GWDxh7LKsSAPxo815kXF~48AwYrxcudFnxw8PB5ObPZyAEdcSCStn87yH4dVADGC8u7jG2ablgFzsCPwWqlWth14ExxmKExTha1dLL~doUMwuDVssKjnyj8Y4QWdnp7fzFN3VdQJGNzoBeLrJlpZMwpc46g6-IRBL8GsisBH2SPfZnWG-okPCIHV0KsF1ozzUXEMfbUus6wfCLGet~hEnTcuRSPGiuG9vvf4~xOnNbT5HLhkuMnlIBMmwGHOBVImVKMYZcymS2-MzsGEkhihS~va-p8NWcJBbQIeRvGfepW84qNzg__", // You'll replace this with the actual image URL
      priceKg: "Kz 500/Kg",
      priceT: "Kz 300.000/T",
    },
    {
      id: "6",
      name: "Cebola roxa",
      image:
        "https://s3-alpha-sig.figma.com/img/0577/e6da/9838e6649678a2b4d1f1c45ff47a7712?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h4UPXx-1z-YIbUmAfJNdgEBwJLRG~~GteXs1tOxG7lVyEN~iq1ObPbS3ox2fjQYKxWzsmb5AYLkQKQhOmK0F2eSDErMu6gXijkKVf3e5rscFClGW-99GY7Fx8TOFIY00jsmUlHQn8WInww8uVg7HLE9jXS5vnuynRELKXMu-ZHu6qfmTJzLPkRJxdhwR0~1OIHLNOxxROZXjc-xUBGnZEZKqxsU9BSmgBX6jPCVbT6gA90DQB~DwIYJJmTw~Oz62o2plz~Uy8xgntgQzwk3HT8r8vNpv-Xh1HS3CLHBfananoAyjixMHqw0MC7Rjh804wIRZHuuyfll3fBV9UitXJQ__", // You'll replace this with the actual image URL
      priceKg: "Kz 96/Kg",
      priceT: "Kz 90.000/T",
    },
    {
      id: "7",
      name: "Tomate",
      image:
        "https://s3-alpha-sig.figma.com/img/f74d/f0a6/028566bd7488766bbbc124a325066c92?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pSGk2Kb5nXEu7tV5ZcYvnsDXsIAxclUtW~89jVaG4ULNwk4EeHSaf9ZwFriEJAhCkB68wnIdzKVKOzl-MSko~OYSnuZRv1koRMOqBLdL9liw2XMVatgQnP2N7YysXWYM51sGep6V4yqEvASNUKIGha9i0q5BCjzRIQdhxg9-Yqyohk7jT9zOpIDQcTahXz5SVFmolGlJorCEYy7Xtn74-JSNtgdAxIlJftpsa97Y88U7dUJVwSiqUw-bo-tWb~k-ydLx7Axl8LGkQLxnO3PM3iXnOxwV1CgZuqjxJcSgAXklKKN7fPkYNTFcg7i43iWBg6z2Hloxyp3HEgzdOTXYJg__", // You'll replace this with the actual image URL
      priceKg: "Kz 180/Kg",
      priceT: "Kz 140.000/T",
    },
  ];
  const producers: Producer[] = [
    {
      businessName: "Fazenda esperança",
      image:
        "https://s3-alpha-sig.figma.com/img/49eb/0361/48b9694bc74fc30219a67b7a41bc7d6d?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XmNe5P6vpNq5SXwvND1Si8iO3UDLK~MnxTlRfB09rpTFbOFqWwlP1OQJRW5ofoDIE7AH7hsme2fv5WG695GGxDb6T6jGPO74rBdo6BpvEtTK6W9S69lSrRZl~AuHGYuvAMH6f8~ZKDd2tkrAQX1Zz6nYIHOqcKWeEl20AFDaNtEzGM6xI3rj-cEds2qRqBLhC8vCQdaC3pKqA2T~vAaITeDUuHEcQm8fFdlZhVUFpVY4fvlkKbV45ANp4OUjmM9ZIZwP7aPRjNz45cfRcflzj7E45MB-R8awq4MsMzao30-3Q29Fn~ZPzyNY97cbMEgnOaSsGzWJ7I-ddb2bGwL7fQ__",
      assessment: 5,
    },
    {
      businessName: "Fazenda Filter",
      image:
        "https://s3-alpha-sig.figma.com/img/705b/fa0e/7ebdc7c71d538aaa2e17a8cd6884ae07?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IipGSIc9VzedJWwFmYoCOfGqHu9cu-nJJVpyT9FAWMGpEplqnq45eAOM37I1XVH89VDuBc0HRBCGvG~WXSS8ydmFfJQg9QGbyoQ5Jc8d2E~9JdC9FsanIYehnPiL6U7-1GMyZuciqmumiCzA9yDZ0~a6UzBfc3PFWTPFra8J9ulzBObu3HV--1pCkGoyfogM2q-67X8qfxoEs1jmWvbZDjUyYquJuzdym4C6tj8onLZCgi1ht4~~g7l9cAYV9-~wykn12J0wWrWomM-I~lGImjgiQHKlv~pwcwOHZhDjsCFd8c-klsklonY1mSvmQvjX-TyAowczClqEscoziRRAtA__",
      assessment: 5,
    },
    {
      businessName: "Farm fresh - Organic",
      image:
        "https://s3-alpha-sig.figma.com/img/2e50/adbf/1057878d411d350c3f089dab0b22fe00?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SlhENQqjmGntBC7EFQv2U7hkOG2itlb7gEjwfsJCfwMgucM--nrUfGPeUjY4qSQhGBcN7rJCL3p9256eq7IgLn3lTuGDN1A7EUfYqoahNjWFZLmI86EB~eFLPriUyJzYL1QgkG49G9pWw~iEKJC5i-qhXMqFH56xWcAcr0ScvS4as64~dnl1DHP8s5X0TRXcKg0a23sSRjkEa934HqGweMJE89G9Vk56NqvXWOl4azWW4QNVQ311fbI71Z5j7nJSfasxA1kkkl4MiAqa8ocDqLNMvXjqL~LiFkbvkZh~c4Hb6iHy~Y7Ftg-qspSZqyDrY64khIoIiuibwnRNgNaxGg__",
      assessment: 5,
    },
    {
      businessName: "Império das colunas",
      image:
        "https://s3-alpha-sig.figma.com/img/4e28/c52b/7f300ac860af6e19c7f84d6adf1ed16c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DhOAWAc6FRe-IdWZXjGdzJXGnOK4EPktQ0O67aP6hHD6R6Yph1eP6TrnqlSSoM-JYSYApDKtqAjdgy5OoJZWSwEK-UvKA5XJlI1AYV6jchkp3kT6l9mfaNC-3FbiT8tnE9in0fAPlM3dadJsvzgLs2ktsef7UavUY0z7gsyep15wUe972mLSNc157GWX0yqNkRTsO2Kw5H3FXj3A~Ei8fTTDYJJFAC1KTUOOL3exA7ptz0Y1al7LC6v3o3holBLjHelPADul~HhbxQUgEJt1fcbKkIj7hFJEpKTbrv6H6D-Bs1Q4uFseKcn84kXN7ijLuuwdild5HWph4gLjMpkOVg__",
      assessment: 5,
    },
    {
      businessName: "Chicken Farm",
      image:
        "https://s3-alpha-sig.figma.com/img/036b/ef32/8c52a9d4a7719bce7d042483aa12f05f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Mg4isUT5TZyHdMSV7W~8b3w-f9b6D6x3mCDzPs0f71gv-N5iJc~ZyFVA2cCVk-KojmM8Yy5SW-8qc7ZYIdB6cWtTLuBWybTgV1xbiQBMAxgdDFvCYOHnkm1bZSofNovuK-hljcFPBgAmL-dL7EhHCvs6-Igr3-Dhd4G-RHCBAsM4v1EHtTzdGErvsk04rgE5IuKb4ZYdmbvfBI~mXrO0yieXuWXFTNkMAbR9u7QUhzQyjkY6dPH0mSsLyJ8RfWZafIwsJBilc9aQ0X0PgEZmEGmcVp70zyhjKOSlhBxxtZyNsUOtmPNWbX~AidO-TXt9PupTudcnGum3jP1Z-q0ywA__",
      assessment: 5,
    },
    {
      businessName: "Fazenda Aviação",
      image:
        "https://s3-alpha-sig.figma.com/img/3039/cf19/64c4e4b301095538e5df6ecc9553a0f2?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=beTjFsr5yM6Atl8kR5d94ex9y8nWAeTJ49D~9~Qb9py-XxeW2qoq500VidtWMjUuDSb12FeiCFjWlBN3D3Xe-OLvR3TOklmgRVw9uUlroHIAXmwMO46B-SGL8sYM1ZSZOAliLm-lquAjSIZrRv5VK1b-hPnJ3RZrDogwW4j~iGBAzRhdT6vlwLK3tZiQZb6n7z0-1gruLvQduRv7VWD9ZAVyjU5iliImSa9GyBk2NORQA1ii-6rOiy8sP~mJxSD50dGSvxwSNiVUZKCt-5rDMuv2K~ELeY~anK4zYHmKut7XhqTPS3-o2vDUyPUCyG6sxvMofFclqHRCM3bXG1bPkw__",
      assessment: 5,
    },
    {
      businessName: "Ouro da Serra",
      image:
        "https://s3-alpha-sig.figma.com/img/06a0/5802/a9814923b23c34fbcbd5006985a4f90c?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=edU7MU6L6CObsfGYH4rTEtj3zKEknZlZ7aiEHIW~rd~y8FmWadrgFAqOPJu0G6NPUN7wxORPaUDmNFttvQQwssVRt9cick5yDcWRcjWMoU74Yrg9VH6QA4E0YOt0nJrXeJCdbP7RTyVc-l4tMbEucL7NGvn3c3upwvXGKccwdFEsNmgG82o01S293QqCb3docI07r8GdujMzyj3Fv0yvKZXfT93V7yVrs6XGfbKyGdMkjQzExpBTiHsZwUh~q629vPBtl-ffbJ1VwSUAQNS~PRpS10JzeHC6ffL8orEnxrnruXnRza-zaz0jo0nEk8uDeAUu4qWHI5Mq9zhTSJRsVg__",
      assessment: 5,
    },
    {
      businessName: "Farm fresh - Organic",
      image:
        "https://s3-alpha-sig.figma.com/img/2e50/adbf/1057878d411d350c3f089dab0b22fe00?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SlhENQqjmGntBC7EFQv2U7hkOG2itlb7gEjwfsJCfwMgucM--nrUfGPeUjY4qSQhGBcN7rJCL3p9256eq7IgLn3lTuGDN1A7EUfYqoahNjWFZLmI86EB~eFLPriUyJzYL1QgkG49G9pWw~iEKJC5i-qhXMqFH56xWcAcr0ScvS4as64~dnl1DHP8s5X0TRXcKg0a23sSRjkEa934HqGweMJE89G9Vk56NqvXWOl4azWW4QNVQ311fbI71Z5j7nJSfasxA1kkkl4MiAqa8ocDqLNMvXjqL~LiFkbvkZh~c4Hb6iHy~Y7Ftg-qspSZqyDrY64khIoIiuibwnRNgNaxGg__",
      assessment: 5,
    },
  ];

  return (
    <section className="md:p-12 overflow-x-hidden relative min-h-screen">
      {!session ? (
        <UnauthenticatedHeader />
      ) : (
        <HeaderAuthenticaded session={session} />
      )}
      <div className="w-full md:h-[128px] h-[88px]" />
      <main className="md:mb-12 md:space-y-8  h-full">
        <Banners />
        <ChooseByCategory
          title="Explore por categoria"
          categories={categories}
        />
        <ProductList title="Mais pedidos" products={products} />
        <ProductList title="Novidades" products={products} />
        <ProducersList title="Produtores" producers={producers} />
      </main>

      <BottomNav />
      <Footer />
    </section>
  );
};
