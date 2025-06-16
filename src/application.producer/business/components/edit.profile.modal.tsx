import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../shadcn/ui/dialog";
import { Textarea } from "../../../shadcn/ui/textarea";
import { Button } from "../../../shadcn/ui/button";
import { Pencil } from "lucide-react";

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
  initialData: {
    imageUrl: string;
    description: string;
    address: string;
  };
  onSave: (data: {
    imageUrl: string;
    description: string;
    address: string;
  }) => void;
}

export function EditProfileModal({
  open,
  onClose,
  initialData,
  onSave,
}: EditProfileModalProps) {
  const [form, setForm] = useState(initialData);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      handleChange("imageUrl", url);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white p-6 rounded-2xl w-full max-w-sm space-y-4">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">
            Editar perfil público
          </DialogTitle>
        </DialogHeader>

        {/* Imagem e botão de editar */}
        <div className="relative w-full h-40 rounded-lg overflow-hidden">
          <img
            src={form.imageUrl}
            alt="Imagem do perfil"
            className="w-full h-full object-cover"
          />
          <button
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
            onClick={() => fileInputRef.current?.click()}
            title="Editar imagem"
          >
            <Pencil size={16} />
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Descrição */}
        <div>
          <label className="block text-sm text-zinc-600 mb-1">Resumo</label>
          <Textarea
            className="rounded-xl border-zinc-300 text-sm"
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </div>

        {/* Endereço */}
        <div>
          <label className="block text-sm text-zinc-600 mb-1">Endereço</label>
          <Textarea
            className="rounded-xl border-zinc-300 text-sm"
            value={form.address}
            onChange={(e) => handleChange("address", e.target.value)}
          />
        </div>

        {/* Botão Salvar */}
        <div className="pt-4">
          <Button
            className="w-full bg-green-200 text-green-800 hover:bg-green-300 font-semibold"
            onClick={() => {
              onSave(form);
              onClose();
            }}
          >
            Salvar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
