import { useSession } from "../../application.client/context/session.context";
import { PendingApprovalComponent } from "./pending-approval/pendding-approval.component";

export function ProducerHomePage() {
  const { session } = useSession();
  if (!session?.user.is_approved) return <PendingApprovalComponent />;

  return <div className="flex flex-col gap-4">em processo...</div>;
}
