"use client";
import { Input } from "@/src/components/Input";
import SignInBtn from "@/src/components/SignInBtn";
import Loading from "@/src/components/Loading";
import { AuthContext } from "@/src/context/AuthContext";
import { useForm } from "@/src/hooks/useForm";
import Image from "next/image";
import { useContext } from "react";

const Login = () => {
  const { signIn, errorMessage, loading } = useContext(AuthContext);

  const { email, password, onChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signIn({ email, password });
  };

  return (
    <main className="p-4 md:p-10 ">
      <section className="flex flex-col md:flex-row justify-between gap-4 md:h-[87vh]">
        <article className="md:w-2/4 flex items-end animate-fade-in max-md:order-2">
          <form
            onSubmit={handleSubmit}
            className="bg-[#264BEB] w-full rounded-3xl p-5 text-2xl md:text-4xl flex flex-col gap-8"
          >
            <Image alt="logo" src={"/whiteLogo.png"} width={194} height={44} />
            {loading ? (
              <Loading />
            ) : (
              <>
                <SignInBtn />
                <Input
                  name="Email:"
                  type="email"
                  placeholder="Añade tu email"
                  onChange={(e: any) => onChange(e.target.value, "email")}
                  value={email}
                />
                <Input
                  name="Contraseña:"
                  type="password"
                  placeholder="Añade tu contraseña"
                  onChange={(e: any) => onChange(e.target.value, "password")}
                  value={password}
                />
                <div className="flex justify-between items-center md:w-3/4">
                  <button className="border py-3 px-8 w-fit rounded-3xl font-semibold capitalize border-white text-white ">
                    Entrar
                  </button>
                  <span className="text-xl text-white">{errorMessage}</span>
                </div>
              </>
            )}
          </form>
        </article>
        <div>
          <Image
            alt="login"
            src={"/login.png"}
            className="animate-fade-in h-full"
            width={804}
            height={1002}
          />
        </div>
      </section>
    </main>
  );
};

export default Login;
