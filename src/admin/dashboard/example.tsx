import { useLocation } from "react-router";

export default function OutraTela() {
  const location = useLocation();
  const email = location.state?.email || "Nenhum email recebido";

  return (
    <div className="bg-green-300">
      <h2>Email recebidos:</h2>

      <p>{email}</p>
    </div>
  );
}
