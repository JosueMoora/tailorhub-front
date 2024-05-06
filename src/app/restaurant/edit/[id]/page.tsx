"use client";
import Button from "@/src/components/Button";
import Dropzone from "@/src/components/Dropzone";
import { AuthContext } from "@/src/context/AuthContext";
import { RestaurantContext } from "@/src/context/RestaurantsContext";
import { Restaurant } from "@/src/interfaces/appInterfaces";
import Image from "next/image";
import { useContext, useState } from "react";

const EditRestaurant = ({params}: any) => {

    const {user } = useContext(AuthContext) 
  const {updateRestaurant, restaurants} = useContext(RestaurantContext) 

  const restaurant: Restaurant | undefined = restaurants.find(r => r.id === Number(params.id))
  const [formData, setFormData] = useState({
    name: restaurant?.name,
    address: restaurant?.address,
    description: restaurant?.description,
    image: restaurant?.image,
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileSelected = (file: any) => {
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    updateRestaurant({
      address: formData.address,
      name: formData.name,
      description: formData.description,
      image: formData.image,
      id: restaurant?.id,
      userId: user?.id
    })
  }
  return (
    <section className=" flex flex-col gap-5 md:h-[85vh] pb-5 ">
        <Image  alt="logo azul" src="/blueLogo.png" width={40} height={40} className="m-auto" />
        <div className="md:flex items-center">
            <form onSubmit={handleSubmit} encType="multipart/form-data" method="POST" className="md:flex md:flex-1 md:px-56 gap-10 ">
                <Dropzone onFileSelected={handleFileSelected} />
                <div className="flex flex-col gap-4 flex-1">
                <label className="flex flex-col gap-3 text-xl md:text-2xl font-semibold">
                    Nombre del restaurante
                    <input
                    type="text"
                    className="border border-black bg-transparent rounded-3xl py-2 px-5 md:placeholder:text-2xl  placeholder:font-normal "
                    placeholder="Burger king"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </label>
                <label className="flex flex-col gap-3  text-xl md:text-2xl font-semibold">
                    Dirección del restaurante
                    <input
                    type="text"
                    className="border border-black bg-transparent rounded-3xl py-2 px-5 md:placeholder:text-2xl  placeholder:font-normal "
                    placeholder="Av cualquiera, calle cualquiera"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    />
                </label>
                <label
                    className="text-xl md:text-2xl font-semibold flex gap-3 flex-col w-full"
                >
                    Descripción del restaurante
                    <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="border border-black rounded-3xl resize-none font-normal px-5 py-10 "
                    placeholder="Escribe información acerca del restaurante"
                    ></textarea>
                </label>
                <div className="flex justify-between items-center">
                  <button className="border py-3 px-8 w-fit rounded-3xl font-semibold capitalize border-black text-black ">
                    Guardar
                  </button>
                  {/* <span className="text-xl text-black">{errorMessage}</span> */}
                </div>
                </div>
            </form>
        </div>
        <Image  alt="logo azul" src="/blueLogo.png" width={40} height={40} className="m-auto" />
    </section>
  );
};

export default EditRestaurant;
