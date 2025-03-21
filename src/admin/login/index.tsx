// import { LoginForm } from "./_components/form";

// export const Login = () => {
//   return (
//     <div className="flex w-full h-screen border">
//       <div className="flex flex-1 justify-center items-center ">
//         <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
//           <div className="w-full max-w-sm">
//             <LoginForm />
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-1 justify-center items-center bg-foreground">
//         image
//       </div>
//     </div>
//   );
// };
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { KeyRound, Mail } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { useNavigate } from "react-router";

const formSchema = z.object({
  email: z.string().email("Digite um e-mail válido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});
export const AdminLogin = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Dados do formulário:", values);
    navigate("/admin/dashboard");
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex w-full max-w-6xl bg-white rounded-4xl shadow-lg overflow-hidden h-[70vh] items-center border ">
        {/* Left side with logo and illustration */}
        <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-12 bg-white">
          <img
            src="/full_logo.svg"
            alt="Fazenda Online Logo"
            className="h-10"
          />

          <div className="flex items-center justify-center">
            <img
              src="/login-image.svg"
              alt="Farm Products Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>
        <div className="h-screen w-px bg-border"></div>

        {/* Right side with login form */}
        <div className="flex-1 flex justify-center">
          <div className="w-[70%]  border-primary md:1/2 p-8">
            <div className="md:hidden mb-6 flex justify-center">
              <img src="/logo.png" alt="Fazenda Online Logo" className="h-8" />
            </div>

            <div className="mb-8">
              <p className="text-gray-600 text-sm">Acesse sua conta</p>
              <h2 className="text-2xl font-bold text-gray-800">
                Seja bem vindo de volta!
              </h2>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </FormLabel>
                      <div className=" flex relative items-center">
                        <FormControl>
                          <Input
                            placeholder="Insira seu email"
                            className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            {...field}
                          />
                        </FormControl>
                        <div className=" absolute right-0 flex items-center pr-3 pointer-events-none">
                          <Mail className="text-gray-400" size={20} />
                        </div>
                      </div>
                      <FormMessage className="text-red-500 text-xs -mb-2" />{" "}
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1 mt-4"
                      >
                        Senha
                      </FormLabel>
                      <div className=" flex relative items-center ">
                        <FormControl className="relative">
                          <Input
                            type="password"
                            className="w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            {...field}
                          />
                        </FormControl>
                        <div className=" absolute right-0 flex items-center pr-3 pointer-events-none">
                          <KeyRound className="text-gray-400" size={20} />
                        </div>
                      </div>
                      <FormMessage className="text-red-500 text-xs " />{" "}
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className=" mt-4 w-full bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                >
                  Acessar
                </Button>
              </form>
            </Form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Esqueceu sua senha?{" "}
                <Button variant={"link"} className=" p-0 text-[#FE7000]">
                  Redefinir a senha
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
