"use client";

import { useState } from "react";
import { Trash, Edit } from "lucide-react";
import { Card, CardHeader } from "../../shadcn/ui/card";
import { Button } from "../../shadcn/ui/button";
import { Label } from "../../shadcn/ui/label";
import { Skeleton } from "../../shadcn/ui/skeleton";
import { useBanners } from "../../hooks/use.banner";
import { Switch } from "../../shadcn/ui/switch";
import { AddBannerDialog } from "./components/AddBannerDialog";

const BannersPage = () => {
  const {
    banners,
    isLoadingBanners,
    isErrorBanners,
    bannersError,
    updateBannerStatus,
    deleteBanner,
    isUpdatingStatus,
    isDeletingBanner,
  } = useBanners();

  const [filterActive] = useState<boolean | null>(null);
  const [isAddBannerDialogOpen, setIsAddBannerDialogOpen] = useState(false);
  const filteredBanners = banners?.filter((banner) => {
    const matchesActive =
      filterActive === null || banner.isActive === filterActive;
    return matchesActive;
  });
  const handleDelete = (bannerId: string) => {
    if (window.confirm("Tem certeza que deseja excluir este banner?")) {
      deleteBanner(bannerId);
    }
  };

  return (
    <Card className=" mt-5  p-4" style={{ fontFamily: "Inter, sans-serif" }}>
      <section className="space-y-6 md:space-y-8 pb-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Header com abas */}
          <CardHeader className="p-0">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <Button
                  variant="ghost"
                  className="text-gray-400 px-3 py-1 text-sm"
                >
                  Início
                </Button>
                <Button
                  variant="default"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 text-sm rounded-full"
                >
                  Categorias
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Título e contador */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold text-zinc-800">
              {banners?.length || 0} banners
            </h1>
            <Button
              onClick={() => setIsAddBannerDialogOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 text-sm"
            >
              Adicionar novo
            </Button>
          </div>
        </div>

        {/* Lista de banners */}
        <div className="space-y-3">
          {isLoadingBanners ? (
            Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="p-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <Skeleton className="w-20 h-16 rounded" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-6 w-12" />
                    <Skeleton className="h-8 w-8 rounded" />
                    <Skeleton className="h-8 w-8 rounded" />
                  </div>
                </div>
              </Card>
            ))
          ) : isErrorBanners ? (
            <div className="text-center text-red-500 py-8">
              Erro ao carregar banners: {bannersError?.message}
            </div>
          ) : filteredBanners && filteredBanners.length > 0 ? (
            filteredBanners.map((banner) => (
              <Card
                key={banner.id}
                className="p-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="flex items-stretch min-h-[80px]">
                  {/* Imagem do banner */}
                  <div className="w-58 flex-shrink-0 ">
                    <img
                      src={banner.imageUrl}
                      alt={banner.imageAltText}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Conteúdo do banner */}
                  <div className="flex-1 min-w-0 p-4">
                    <h3 className="font-medium text-zinc-800 text-sm truncate mb-1">
                      {banner.title}
                    </h3>
                    <p className="text-xs text-zinc-500 mb-1">
                      Adicionado em {banner.publishedAt}
                    </p>
                    <p className="text-xs text-zinc-500 mb-1">Link: -</p>
                    <p className="text-xs text-zinc-500">
                      Categoria: {banner.category}
                    </p>
                  </div>

                  {/* Controles */}
                  <div className="flex items-center gap-3 p-4">
                    {/* Switch de ativo/inativo */}
                    <div className="flex items-center gap-2">
                      <Label className="text-xs text-zinc-600">
                        {banner.isActive ? "Ativo" : "Inativo"}
                      </Label>
                      <Switch
                        checked={banner.isActive}
                        onCheckedChange={(checked) =>
                          updateBannerStatus({
                            id: banner.id,
                            isActive: checked,
                          })
                        }
                        disabled={isUpdatingStatus}
                        className="data-[state=checked]:bg-green-500 rounded-md border-gray-300"
                      />
                    </div>

                    {/* Botões de ação */}
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
                      onClick={() => handleDelete(banner.id)}
                      disabled={isDeletingBanner}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center text-zinc-500 py-8">
              Nenhum banner encontrado.
            </div>
          )}
        </div>

        <AddBannerDialog
          isOpen={isAddBannerDialogOpen}
          onOpenChange={setIsAddBannerDialogOpen}
        />
      </section>
    </Card>
  );
};

export default BannersPage;
