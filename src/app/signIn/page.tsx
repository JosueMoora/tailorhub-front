"use client";
import BackBtn from "@/src/components/BackBtn";
import Button from "@/src/components/Button";
import { AuthContext } from "@/src/context/AuthContext";
import Image from "next/image";
import { useContext } from "react";

const SingIn = () => {
  const { errorMessage, loading, newUser, setNewUser } =
    useContext(AuthContext);
  const { email, name } = newUser;

  return (
    <main className="p-4 md:p-10 ">
      <section className="flex flex-col md:flex-row justify-between gap-4 md:h-[87vh]">
        <article className="md:w-2/4 flex items-end animate-fade-in max-md:order-2">
          <div className="bg-[#264BEB] w-full rounded-3xl p-5 text-2xl md:text-4xl flex flex-col gap-8">
            <Image alt="logo" src={"/whiteLogo.png"} width={194} height={44} />
            <BackBtn url="/login" />
            <label className="flex flex-col gap-3 md:w-3/4 text-white text-xl md:text-2xl font-semibold">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setNewUser({ ...newUser, ["email"]: e.target.value })
                }
                className="border bg-transparent rounded-3xl py-3 px-5 md:placeholder:text-2xl  placeholder:font-normal placeholder:text-white"
                placeholder="Añade tu Email"
              />
            </label>
            <label className="flex flex-col gap-3 md:w-3/4 text-white text-xl md:text-2xl font-semibold">
              Nombre de usuario
              <input
                type="email"
                value={name}
                onChange={(e) =>
                  setNewUser({ ...newUser, ["name"]: e.target.value })
                }
                className="border bg-transparent rounded-3xl py-3 px-5 md:placeholder:text-2xl  placeholder:font-normal placeholder:text-white"
                placeholder="Añade tu nombre"
              />
            </label>
            <Button
              url="/signIn/password"
              name="siguiente"
              className="border-white text-white "
            />
          </div>
        </article>
        <div>
          <Image
            alt="restaurant"
            src={"/signIn.png"}
            className="animate-fade-in h-full"
            width={804}
            height={1002}
          />
        </div>
      </section>
    </main>
  );
};

export default SingIn;
