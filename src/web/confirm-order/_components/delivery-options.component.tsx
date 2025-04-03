import { MapPin } from "lucide-react";
import { useSession } from "../../context/session.context";

export function DeliveryOptions() {
  const { session } = useSession();
  console.log(session);
  return (
    <div className="h-[486px] bg-zinc-50 shadow-lg rounded-xl p-4">
      <h3 className="font-medium text-xl text-zinc-800">
        Entregar no endereço
      </h3>
      <div>
        <MapPin className="text-zinc-50 fill-secondary" />
      </div>
    </div>
  );
}
