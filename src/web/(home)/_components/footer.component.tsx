export function Footer() {
  return (
    <>
      <footer className="bg-[#E4EAE7] -m-12 p-12 mt-12">
        <div className="flex items-center justify-center flex-col gap-8">
          <img src="/full_logo.svg" />
          <div className="flex flex-col gap-2 text-center text-zinc-600">
            <p className="">Fazenda online LTDA</p>
            <p>CNPJ 123456789</p>
            <span className="text-sm">Todos os direitos reservados</span>
          </div>
        </div>
      </footer>
      <div className="md:hidden h-16" />
    </>
  );
}
