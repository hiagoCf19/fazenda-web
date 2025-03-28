import { Store, UserRoundCheck } from "lucide-react";
import { useState } from "react";
import RegisterClientForm from "./_components/cadastro/form/form";

export function RegisterClientPage() {
  const [renderForm, setRenderForm] = useState(false);
  return renderForm ? (
    <RegisterClientForm />
  ) : (
    <>
      <h2 className="text-3xl text-secondary-foreground text-center font-medium">
        Como deseja realizar seu <br />
        cadastro de cliente?
      </h2>
      <section className="p-12 flex justify-center flex-col items-center space-y-12">
        <div className="flex gap-4">
          <button className="bg-secondary-foreground flex flex-col rounded-4xl w-[405px] h-[154px] p-8">
            <div className="flex gap-2 items-center">
              <Store className="text-secondary size-8" />
              <p className="text-secondary text-2xl font-bold">Empresa</p>
            </div>
            <p className="text-zinc-50 text-lg text-justify mt-4">
              A conta será vinculada à sua empresa ou estabelecimento
            </p>
          </button>
          <button
            className="bg-secondary flex flex-col rounded-4xl w-[405px] h-[154px] p-8"
            onClick={() => setRenderForm(true)}
          >
            <div className="flex gap-2 items-center">
              <UserRoundCheck className="text-secondary-foreground size-8" />
              <p className="text-secondary-foreground text-2xl font-bold">
                Particular
              </p>
            </div>
            <p className="text-zinc-700 text-lg text-justify mt-4">
              A conta será vinculada à sua empresa ou estabelecimento
            </p>
          </button>
        </div>
      </section>
    </>
  );
}
