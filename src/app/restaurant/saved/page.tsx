import Button from "@/src/components/Button"
import Image from "next/image"

const page = () => {
  return (
    <section className="flex flex-col justify-center items-center h-[85vh]">
        <div className="flex flex-col gap-8 items-center">
            <Image  alt="logo azul" src="/blueLogo.png" width={40} height={40} className="m-auto" />
            <h2 className="text-2xl font-semibold text-blue-700">Restaurante guardado</h2>
            <Button name="Ver Restaurantes" url="/home" />
            <Image  alt="logo azul" src="/blueLogo.png" width={40} height={40} className="m-auto" />
        </div>
    </section>
  )
}

export default page