export function Footer() {
  return (
    <>
      <footer className="md:h-[309px] h-[200px] w-full    md:p-12 md:-m-12 p-4 md:mt-12 mt-4 flex justify-center items-center space-y-4 flex-col ">
        <img src="/full_logo.svg" />
        <div className="flex flex-col gap-2 text-center text-zinc-600">
          <p className="">Fazenda online LTDA</p>
          <p>CNPJ 123456789</p>
          <span className="text-sm">Todos os direitos reservados</span>
        </div>
      </footer>
      <div className="md:hidden h-16" />
    </>
  );
}
