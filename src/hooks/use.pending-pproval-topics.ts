import { useQuery } from "@tanstack/react-query";
import { getPendingApprovalTopics } from "../service/pending-approval.service";

export function usePendingApprovalTopics() {
  return useQuery({
    queryKey: ["pending-approval-topics"],
    queryFn: getPendingApprovalTopics,
  });
}
