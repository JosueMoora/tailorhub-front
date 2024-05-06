"use client";
import Image from "next/image";
import Cover from "../components/Cover";
import Button from "../components/Button";
import useSplash from "../hooks/useSplash";

const Home = () => {
  const { showSplash } = useSplash();
  return (
    <main className="md:p-10 p-4 ">
      {showSplash ? (
        <Cover />
      ) : (
        <section className="flex max-md:flex-col gap-4 justify-between md:h-[87vh]">
          <article className="md:w-2/4 flex items-end animate-fade-in max-md:order-2">
            <div className="bg-[#F1F1F0] rounded-3xl p-5 text-2xl md:text-4xl flex flex-col gap-10">
              <Image alt="logo" src={"/logo.png"} width={194} height={44} />
              <p>
                <span className="block pb-3">Hola,</span>
                Bienvenido a la prueba de Tailor hub, en ella has de añadir los
                restaurantes favoritos donde te gustaría ir en tu onboarding.
              </p>
              <Button url="/login" name="Entrar" />
            </div>
          </article>
          <Image
            alt="restaurant"
            src={"/homeRestaurant.png"}
            className="animate-fade-in"
            width={804}
            height={1002}
          />
        </section>
      )}
    </main>
  );
};

export default Home;
