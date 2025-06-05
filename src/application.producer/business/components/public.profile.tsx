import { Star } from "lucide-react";


interface PublicProfileProps {
  imageUrl: string;
  name: string;
  rating: number;
  description: string;
  address: string;
  onEdit?: () => void;
}

export const PublicProfile = ({
  //imageUrl,
  //name,
  //rating,
  //description,
  //address,
  onEdit,
}: PublicProfileProps) => {
  return (
    <div className="space-y-2">
      {/* Título e botão de edição */}
      <div className="flex justify-between items-center px-2">
        <h2 className="text-2xl font-semibold text-zinc-700">Perfil público</h2>
        <button className="text-orange text-xl font-medium" onClick={onEdit}>
          Editar
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Imagem com border-top-radius apenas */}
        <img
          src="/src/application.producer/business/image/fazenda.jpg"
          alt="Fazenda"
          className="w-full h-68 object-cover"
        />

        {/* Conteúdo interno com padding */}
        <div className="p-4 space-y-2">
          {/* Título + avaliação */}
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-zinc-800">
              OrganicFarm
            </h3>
            <div className="flex items-center gap-1 text-orange text-sm">
              <Star size={14} fill="currentColor" />
              <span>5.0</span>
            </div>
          </div>

          {/* Descrição */}
          <p className="text-lg text-zinc-600">
            A OrganicFarm apoia alimentos orgânicos e sem uso de agrotóxicos,
            nossos alimentos garantem uma alimentação saudável e segura desde
            1997.
          </p>

          {/* Endereço */}
          <div className="text-xl text-zinc-700">
            <strong>Endereço</strong>
            <p>
              Talatona, Via C3, Zona INST4 no
              <br />
              Loteamento Palncas Negras, 35
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
