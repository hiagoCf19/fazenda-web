import { Link } from "react-router";

export function Producerbanner() {
  return (
    <div className="w-[326px] h-[138px] bg-gradient-to-l from-primary to-primary/40 rounded-3xl relative">
      <div>
        <h3 className="text-secondary-foreground font-extrabold text-xl px-4 pt-4 pb-2">
          Comece pelo <br /> seu cardápio
        </h3>
        <Link
          to={"/producer/profile"}
          className="md:mt-4 bg-orange px-2 py-1 md:px-12 md:py-5 rounded-full text-zinc-50 md:bg-zinc-50 md:rounded-xl font-bold text-xs md:text-2xl cursor-pointer mx-4"
        >
          Cadastrar produtos
        </Link>
      </div>
      <div className="w-min md:w-auto ">
        <img
          src="/producer/home-banner.png"
          className=" absolute md:relative bottom-0 -right-0 w-40 md:w-[350px]"
          alt="Mulher"
        />
      </div>
    </div>
  );
}
