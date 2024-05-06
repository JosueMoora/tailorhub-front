"use client"
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Image from "next/image";
import { RestaurantContext } from "../context/RestaurantsContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  
  const {user, logOut} = useContext(AuthContext)


  return (
    <nav className="navbar justify-between items-center px-10 bg-white fixed z-10">
          <Link href="/home" className="text-base font-normal flex items-center gap-4">
            <Image src="/blueLogo.png" alt="Home" width={30} height={30} />
            <h3 className="pt-2">Inicio </h3>
          </Link>
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn text-base font-normal"
            >
             {user?.name} ↓
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-4 shadow rounded-box w-52 mt-4 bg-[#264BEB] text-white text-base font-normal rounded-tr-none "
            >
              <li>
                <Link href="/dashboard">Panel de control</Link>
              </li>
              <li>
                <Link href="/restaurant/add">Añadir restaurante</Link>
              </li>
              <div className="border-white border-[0.3px] my-4" />
              <div className="flex justify-center">
                <button onClick={logOut} className="border py-3 px-8 w-fit rounded-3xl font-semibold capitalize border-white text-white "> 
                    Cerrar Sesión
                </button>
              </div>
            </ul>
          </div>
    </nav>
  );
};

export default Navbar;
