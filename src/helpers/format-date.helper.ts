import { format } from "date-fns";

export function FormatDateHelper(data: string | null | undefined) {
  const dateInstance = data ? new Date(data) : null;

  if (!dateInstance || isNaN(dateInstance.getTime())) {
    return { date: "--/--/----", time: "--:--" };
  }

  return {
    date: format(dateInstance, "dd/MM/yyyy"),
    time: format(dateInstance, "HH:mm"),
  };
}
