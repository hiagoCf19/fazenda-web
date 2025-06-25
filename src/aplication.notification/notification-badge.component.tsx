import { Badge } from "../shadcn/ui/badge";

interface NotificationBadgeProps {
  count: number;
  className?: string;
}

export function NotificationBadge({
  count,
  className = "",
}: NotificationBadgeProps) {
  if (count === 0) return null;

  return (
    <Badge
      variant="destructive"
      className={`absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs font-bold rounded-full ${className}`}
    >
      {count > 99 ? "99+" : count}
    </Badge>
  );
}
