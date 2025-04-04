import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-primary text-center px-4">
      {/* Logo */}
      <div className="mb-8">
        {/* Substitua por sua logo */}

        <img src="/full_logo.svg" alt="Fazenda" className="size-80 -my-20" />
      </div>

      {/* Código de erro */}
      <h1 className="text-6xl font-extrabold mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Página não encontrada</p>
      <p className="text-base text-muted-foreground mb-6">
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>

      <Link
        to="/"
        className="bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl font-medium shadow hover:bg-primary/90 transition"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
