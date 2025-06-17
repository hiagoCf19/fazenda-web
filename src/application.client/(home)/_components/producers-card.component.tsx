// producers-card.component.tsx - ATUALIZADO
import { Link } from "react-router";
import { Producer } from "../../../../types/producer";
import { StarIcon } from "lucide-react";
import { useState } from "react";

interface ProducerCardProps {
  producer: Producer;
}

export function ProducersCard({ producer }: ProducerCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Original - sempre visível */}
      <Link to={`/produtor/${producer.id}`}>
        <div className="relative rounded-t-3xl rounded-b-xs shadow-xl overflow-hidden md:w-[169px] md:h-[82px] w-[140px] h-[70px]">
          <img
            src={producer.image}
            alt={producer.businessName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-40">
          <p className="text-lg text-zinc-800 font-medium md:leading-normal leading-5 mt-2">
            {producer.businessName}
          </p>
          <div className="flex items-center gap-2">
            <StarIcon className="text-yellow-400 fill-yellow-400 w-5 h-5" />
            <span className="text-zinc-700 font-medium">
              {producer.assessment}.0
            </span>
          </div>
        </div>
      </Link>

      {/* Card Expandido - aparece no hover */}
      {isHovered && (
        <div
          className="absolute top-0 -left-10 -translate-y-4 z-50 
                     bg-white rounded-lg shadow-2xl overflow-hidden
                     transition-all duration-300 ease-out
                     pointer-events-none expanded-info-card"
          style={{ width: "280px", height: "268px" }}
        >
          {/* Imagem expandida */}
          <div className="relative h-46 overflow-hidden">
            <img
              src={producer.image}
              alt={producer.businessName}
              className="w-full h-full object-cover"
            />

            {/* Overlay com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Informações sobre a imagem */}
            <div className="absolute bottom-4 left-3 right-3">
              <h3 className="text-white font-semibold text-sm mb-1">
                {producer.businessName}
              </h3>
              <div className="flex items-center gap-2">
                <StarIcon className="text-yellow-400 fill-yellow-400 w-4 h-4" />
                <span className="text-white text-sm font-medium">
                  {producer.assessment}.0
                </span>
              </div>
            </div>
          </div>
          {/* Área de informações adicionais */}
          <div className="p-3 bg-white">
            <p className="text-xs text-gray-600 line-clamp-2">
              informações adicionais sobre o produtor, como localização, tipo de
              produtos, etc.
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Disponível
              </span>
              <Link
                to={`/produtor/${producer.id}`}
                className="text-xs text-[#FE7000] font-medium hover:underline pointer-events-auto"
              >
                Ver mais
              </Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .expanded-info-card {
          animation: expandCard 0.3s ease-out forwards;
        }
        
        @keyframes expandCard {
          0% {
            opacity: 0;
            transform: translateY(-4px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(-4px) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
