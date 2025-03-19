import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useNavigate } from "react-router";

export default function Page() {
  const [email, setEmail] = useState(""); // Estado para armazenar o email
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = () => {
    navigate("/admin/planos", { state: { email } }); // Passa o email como estado
  };
  return (
    <div className="w-full">
      <h2 className="bg-red-300">INSIRA OS DADOS</h2>
      <Input
        type="email"
        placeholder="Email"
        className="w-min"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Atualiza o estado
      />
      <Button onClick={handleSubmit}>Send</Button>
    </div>
  );
}
