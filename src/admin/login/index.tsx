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
import { useState } from "react";
import { Input } from "../../components/ui/input";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt with:", { email, password });
  };

  const handleResetPassword = () => {
    // Handle password reset logic here
    console.log("Password reset requested for:", email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left side with logo and illustration */}
        <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-12 bg-white">
          <div className="mb-8">
            <img src="/logo.png" alt="Fazenda Online Logo" className="h-10" />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/farm-products-illustration.png"
              alt="Farm Products Illustration"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Right side with login form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="md:hidden mb-6 flex justify-center">
            <img src="/logo.png" alt="Fazenda Online Logo" className="h-8" />
          </div>

          <div className="mb-8">
            <p className="text-gray-600 text-sm">Acesse sua conta</p>
            <h2 className="text-2xl font-bold text-gray-800">
              Seja bem vindo de volta!
            </h2>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Insira seu email"
                  className="w-full p-4 py-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Senha
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Sua senha de acesso"
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white font-medium py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
            >
              Acessar
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Esqueceu sua senha?{" "}
              <button
                type="button"
                onClick={handleResetPassword}
                className="text-green-500 hover:text-green-700 font-medium focus:outline-none"
              >
                Redefinir a senha
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
