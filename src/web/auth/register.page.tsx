import { Store, UserRoundCheck } from "lucide-react";
import { useState } from "react";
import RegisterClientForm from "./_components/register/form.component";

export enum ProfileTypeEnum {
  INDIVIDUAL = "individual",
  BUSINESS = "business",
}
export function RegisterClientPage() {
  const [renderForm, setRenderForm] = useState(false);
  const [registerType, setRegisterType] = useState<ProfileTypeEnum>(
    ProfileTypeEnum.BUSINESS
  );

  return renderForm ? (
    <RegisterClientForm profile_type={registerType} />
  ) : (
    <>
      <h2 className="md:text-3xl text-xl mt-6 md:mt-0 text-secondary-foreground text-center font-medium">
        Como deseja realizar seu <br />
        cadastro de cliente?
      </h2>
      <section className="px:p-12 mt-4 md:mt-0  flex justify-center flex-col items-center md:space-y-12">
        <div className="flex md:gap-4 gap-2">
          <button
            className="bg-secondary-foreground flex flex-col rounded-4xl md:w-[405px] md:h-[154px] md:p-8 p-4 flex-1"
            onClick={() => {
              setRenderForm(true);
              setRegisterType(ProfileTypeEnum.BUSINESS);
            }}
          >
            <div className="flex gap-2 items-center">
              <Store className="text-secondary md:size-8" />
              <p className="text-secondary md:text-2xl text-lg font-bold">
                Empresa
              </p>
            </div>
            <p className="text-zinc-50 md:text-lg text-justify md:mt-4 mt-2">
              A conta será vinculada à sua empresa ou estabelecimento
            </p>
          </button>
          <button
            className="bg-secondary flex flex-col rounded-4xl md:w-[405px] md:h-[154px] md:p-8 p-4 flex-1"
            onClick={() => {
              setRenderForm(true);
              setRegisterType(ProfileTypeEnum.INDIVIDUAL);
            }}
          >
            <div className="flex gap-2 items-center">
              <UserRoundCheck className="text-secondary-foreground md:size-8" />
              <p className="text-secondary-foreground md:text-2xl text-lg font-bold">
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
