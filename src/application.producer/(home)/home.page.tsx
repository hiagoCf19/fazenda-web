import { useSession } from "../../application.client/context/session.context";
import { ProducerHeader } from "../_components/producer-header.component";
import { Producerbanner } from "./_components/producer-banner.component";
import { PendingApprovalComponent } from "./pending-approval/pendding-approval.page";

export function ProducerHomePage() {
  const { session } = useSession();
  if (!session?.user.is_approved) return <PendingApprovalComponent />;

  return (
    <section>
      <ProducerHeader />
      <div className="flex justify-center">
        <Producerbanner />
      </div>
    </section>
  );
}
