import { Link } from "react-router";

export function BannerProducer() {
  return (
    <div className="md:w-full md:mt-10   md:h-[308px] h-[138px] bg-gradient-to-l from-primary to-primary/40 rounded-3xl relative md:flex">
      <div className=" md:p-12  md:flex-1 ">
        <div className="md:space-y-4">
          <h3 className="text-secondary-foreground font-extrabold text-xl px-4 pt-4 pb-2 md:text-6xl">
            Comece pelo <br /> seu cardápio
          </h3>
          <Link
            to={"/producer/profile"}
            className="bg-orange px-2 py-1 md:px-12 md:py-2 rounded-full text-zinc-50  md:rounded-4xl font-bold text-xs md:text-2xl cursor-pointer mx-4"
          >
            Cadastrar produtos
          </Link>
        </div>
      </div>
      <div className="md:flex-1">
        <img
          src="/producer/home-banner.png"
          className=" absolute md:relative bottom-0 -right-0 w-40 md:w-[450px]"
          alt="Mulher"
        />
      </div>
    </div>
  );
}
