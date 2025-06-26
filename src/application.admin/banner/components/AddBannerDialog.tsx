import React, { useState } from "react";
import { ImagePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../../shadcn/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../shadcn/ui/select"; // Para categoria
import { useBanners } from "../../../hooks/use.banner";
import type {
  BannerCategory,
  BannerSeason,
} from "../../../service/banners.service";
import { Label } from "../../../shadcn/ui/label";
import { Input } from "../../../shadcn/ui/input";
import { Textarea } from "../../../shadcn/ui/textarea";
import { Switch } from "../../../shadcn/ui/switch";
import { Button } from "../../../shadcn/ui/button";
import { Checkbox } from "../../../shadcn/ui/checkbox";

interface AddBannerDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddBannerDialog({
  isOpen,
  onOpenChange,
}: AddBannerDialogProps) {
  const { addBanner, isAddingBanner } = useBanners();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [redirectLink, setRedirectLink] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Simula a URL da imagem após upload
  const [imageAltText, setImageAltText] = useState("");
  const [category, setCategory] = useState<BannerCategory | "">(""); // Categoria
  const [availableSeasons, setAvailableSeasons] = useState<BannerSeason[]>([]);
  const [isActive, setIsActive] = useState(true); // Default ativo

  // Mocks para opções de categoria e estação
  const categories: BannerCategory[] = [
    "Orgânico",
    "Vegetais",
    "Frutas",
    "Laticínios",
    "Carnes",
    "Grãos",
    "Outros",
  ];
  const seasons: BannerSeason[] = ["Verão", "Inverno", "Outono", "Primavera"];

  const handleSeasonChange = (season: BannerSeason, checked: boolean) => {
    if (checked) {
      setAvailableSeasons((prev) => [...prev, season]);
    } else {
      setAvailableSeasons((prev) => prev.filter((s) => s !== season));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !redirectLink || !imageUrl || !category) {
      // Validação básica
      alert(
        "Por favor, preencha todos os campos obrigatórios e selecione uma categoria."
      );
      return;
    }

    addBanner(
      {
        title,
        subtitle,
        redirectLink,
        imageUrl,
        imageAltText,
        category,
        isActive,
        availableSeasons,
      },
      {
        onSuccess: () => {
          alert("Banner adicionado com sucesso!"); // Substituir por toast
          onOpenChange(false); // Fecha o diálogo
          // Limpar formulário
          setTitle("");
          setSubtitle("");
          setRedirectLink("");
          setImageUrl("");
          setImageAltText("");
          setCategory("");
          setAvailableSeasons([]);
          setIsActive(true);
        },
        onError: (error) => {
          alert(`Erro ao adicionar banner: ${error.message}`); // Substituir por toast
        },
      }
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] rounded-2xl p-6">
        {" "}
        {/* Ajuste o arredondamento */}
        <DialogHeader className="mb-4">
          <DialogTitle className="text-xl font-semibold">
            Adicionar novo banner
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Preencha os detalhes para criar um novo banner.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title">
              Título da campanha (ex: compra mínima)
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título do banner"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subtitle">Subtítulo do banner</Label>
            <Textarea
              id="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Descrição curta do banner"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="redirectLink">Link de redirecionamento</Label>
            <Input
              id="redirectLink"
              type="url" // Tipo URL para validação básica
              value={redirectLink}
              onChange={(e) => setRedirectLink(e.target.value)}
              placeholder="https://exemplo.com/pagina-do-banner"
              required
            />
          </div>
          {/* Campo Imagem do banner - Simulando upload com URL */}
          <div className="grid gap-2">
            <Label htmlFor="imageUrl">URL da imagem do banner</Label>
            <div className="relative">
              <Input
                id="imageUrl"
                type="text" // Em um cenário real, seria type="file"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="nova_imagem"
                required
                className="pr-10" // Espaço para o ícone
              />
              <ImagePlus className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="imageAltText">Legenda da imagem (Alt Text)</Label>
            <Input
              id="imageAltText"
              value={imageAltText}
              onChange={(e) => setImageAltText(e.target.value)}
              placeholder="Ex: Foto de frutas frescas"
            />
          </div>
          {/* Categoria do Banner (Select) */}
          <div className="grid gap-2">
            <Label htmlFor="category">Categoria</Label>
            <Select
              value={category}
              onValueChange={(value: BannerCategory) => setCategory(value)}
              required
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Selecione a categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Disponível em (Checkboxes) */}
          <div className="grid gap-2">
            <Label>Disponível em</Label>
            <div className="grid grid-cols-2 gap-2">
              {seasons.map((season) => (
                <div key={season} className="flex items-center space-x-2">
                  <Checkbox
                    id={`season-${season}`}
                    checked={availableSeasons.includes(season)}
                    onCheckedChange={(checked) =>
                      handleSeasonChange(season, Boolean(checked))
                    }
                  />
                  <Label htmlFor={`season-${season}`}>{season}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Ativo/Inativo (Opcional, se quiser dar controle no formulário de criação) */}
          <div className="flex items-center space-x-2">
            <Switch
              id="isActive"
              checked={isActive}
              onCheckedChange={setIsActive}
            />
            <Label htmlFor="isActive">Banner Ativo</Label>
          </div>

          <DialogFooter className="mt-6 flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white"
              disabled={isAddingBanner}
            >
              {isAddingBanner ? "Salvando..." : "Salvar"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
