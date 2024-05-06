"use client"
import BackBtn from "@/src/components/BackBtn";
import Loading from "@/src/components/Loading";
import { AuthContext } from "@/src/context/AuthContext";
import Image from "next/image";
import { useContext } from "react";

const Password = () => {
  const { errorMessage, loading, signUp, newUser, setNewUser } = useContext(AuthContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signUp();
  };
  return (
    <main className="p-4 md:p-10 ">
      <section className="flex justify-between max-md:flex-col gap-4 md:h-[87vh]">
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
                <BackBtn url="/signIn" />
                <label className="flex flex-col gap-3 md:w-3/4 text-white text-xl md:text-2xl font-semibold">
                  Crea una nueva contraseña
                  <input
                    type="password"
                    value={newUser.password}
                    onChange={(e) =>
                      setNewUser({ ...newUser, ["password"]: e.target.value })
                    }
                    className="border bg-transparent rounded-3xl py-3 px-5 md:placeholder:text-2xl  placeholder:font-normal placeholder:text-white"
                    placeholder="Añade una contraseña"
                  />
                </label>
                <div className="flex justify-between items-center md:w-3/4">
                  <button className="border py-3 px-8 w-fit rounded-3xl font-semibold capitalize border-white text-white ">
                    Finalizar
                  </button>
                  <span className="text-xl text-red-600">{errorMessage}</span>
                </div>
              </>
            )}
          </form>
        </article>
        <Image alt="restaurant" src={"/signIn.png"} width={804} height={1002} />
      </section>
    </main>
  );
};

export default Password;
