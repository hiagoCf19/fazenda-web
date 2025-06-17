import { Star } from "lucide-react";
import { EditProfileModal } from "./edit-business.component";
import { useState } from "react";

interface PublicProfileProps {
  imageUrl: string;
  name: string;
  rating: number;
  description: string;
  address: string;
  //onEdit?: () => void;
}

export const PublicProfile = ({
  imageUrl,
  name,
  rating,
  description,
  address,
}: //onEdit,
PublicProfileProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [profile, setProfile] = useState({ imageUrl, description, address });

  return (
    <div className="space-y-4">
      {/* Modal */}
      <EditProfileModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialData={profile}
        onSave={(data) => setProfile(data)}
      />

      {/* Título e botão de edição */}
      <div className="flex justify-between items-center px-2">
        <h2 className="text-2xl font-semibold text-zinc-700">Perfil público</h2>
        <button
          className="text-orange text-xl font-medium cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          Editar
        </button>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden">
        <img
          src={profile.imageUrl}
          alt="Imagem do produtor"
          className="w-full md:w-92 h-48 md:h-auto object-cover"
        />
        <div className="flex flex-col justify-center p-4 border-t md:border-t-0 md:border-r w-full md:w-[45%]">
          <div className="flex justify-between items-start">
            <h3 className="text-base font-semibold text-zinc-800">{name}</h3>
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
              <Star size={14} fill="currentColor" />
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-xs text-zinc-600 mt-2 leading-snug">
            {profile.description}
          </p>
        </div>
        <div className="flex flex-col justify-center p-4 text-sm text-zinc-700 w-full md:w-[35%]">
          <strong className="mb-1">Endereço</strong>
          <p className="text-xs leading-snug">{profile.address}</p>
        </div>
      </div>
    </div>
  );
};
