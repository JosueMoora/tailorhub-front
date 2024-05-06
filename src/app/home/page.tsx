"use client"
import Card from "@/src/components/Card"
import { RestaurantContext } from "@/src/context/RestaurantsContext"
import Image from "next/image"
import { useContext } from "react"

const Feed = () => {
  const {restaurants} = useContext(RestaurantContext)
  return (
    <section className=" md:flex justify-between max-md:space-y-4 max-md:pb-4">
        <div className="md:w-2/4 animate-fade-in">
            <Image alt="map" src="/map.png" width={750} height={842} className=" md:fixed aspect-square "/>
        </div>
        <article className="flex flex-col gap-5 md:flex-1 animate-fade-in">
          {
            restaurants.map(res => (
              < Card key={res.id} restaurant={res} />
            ))
          }
        </article>
        
    </section>
  )
}

export default Feed