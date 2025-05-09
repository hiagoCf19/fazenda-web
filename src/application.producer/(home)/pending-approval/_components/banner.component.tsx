import { Link } from "react-router";

export function PendingApprovalBanner() {
  return (
    <div className="w-[326px] md:w-full md:h-[400px] h-[255px] bg-gradient-to-l from-orange to-orange/40 flex justify-between md:justify-normal relative overflow-hidden rounded-3xl  mx-auto md:p-8">
      <div className="w-[180px] md:w-auto flex items-center justify-center flex-col md:items-start">
        <h3 className="text-xl md:text-4xl  text-zinc-50 font-extrabold">
          Logo seu perfil <br className="md:hidden" /> será aprovado
        </h3>
        <p className=" ml-2 md:ml-0 text-sm md:text-xl text-zinc-50 p-2 text-pretty md:font-semibold">
          Seu perfil passa por uma avaliação, entraremos em contato até 72h para{" "}
          explicar os <br className="hidden md:block" />
          próximos passos.
        </p>
        <Link
          to={"/producer/profile"}
          className="md:mt-4 bg-secondary px-2 py-1 md:px-12 md:py-5 rounded-full text-secondary-foreground md:bg-zinc-50 md:rounded-xl font-bold text-xs md:text-2xl cursor-pointer"
        >
          Atualizar meus dados
        </Link>
      </div>
      <div className="w-min md:w-auto ">
        <img
          src="/producer/pending-approval-woman.png"
          className=" absolute md:relative bottom-0 -right-8 w-48 md:w-[350px]"
          alt="Mulher"
        />
      </div>
    </div>
  );
}
