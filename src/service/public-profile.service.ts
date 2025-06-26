export type PublicProfileData = {
  imageUrl: string;
  name: string;
  rating: number;
  description: string;
  address: string;
};

export async function getPublicProfile(): Promise<PublicProfileData> {
  //TODO: import.meta.env.VITE_INTEGRATION_IN_PROGRESS === "true"
  if (true) {
    return {
      imageUrl: "/image/fazenda.jpg",
      name: "OrganicFarm",
      rating: 5.0,
      description:
        "A OrganicFarm apoia alimentos orgânicos e sem uso de agrotóxicos. Desde 1997 promovendo saúde e sustentabilidade.",
      address:
        "Talatona, Via C3, Zona INST4 no\nLoteamento Palancas Negras, 35",
    };
  } else {
    const response = await fetch("/api/public-profile");
    if (!response.ok) throw new Error("Erro ao buscar perfil público");
    return await response.json();
  }
}
