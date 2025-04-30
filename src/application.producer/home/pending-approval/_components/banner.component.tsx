import { Link } from "react-router";

export function PendingApprovalBanner() {
  return (
    <div className="w-[326px] h-[255px] bg-gradient-to-l from-orange to-orange/40 flex justify-between relative overflow-hidden rounded-3xl  mx-auto">
      <div className="w-[180px] flex items-center justify-center flex-col">
        <h3 className="text-xl  text-zinc-50 font-extrabold">
          Logo seu perfil <br /> será aprovado
        </h3>
        <p className="text-sm text-zinc-50 p-2 text-pretty font-semibold">
          Seu perfil passa por uma avaliação, entraremos em contato até 72h para
          explicar os próximos passos
        </p>
        <Link
          to={"/producer/profile"}
          className=" bg-secondary px-2 py-1 rounded-full text-secondary-foreground font-bold text-xs cursor-pointer"
        >
          Atualizar meus dados
        </Link>
      </div>
      <div className="w-min">
        <img
          src="/producer/pending-approval-woman.png"
          className=" absolute bottom-0 -right-8 w-48"
          alt="Mulher"
        />
      </div>
    </div>
  );
}
