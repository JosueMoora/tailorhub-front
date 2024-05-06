/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import MyCard from "@/src/components/MyCard"
import { AuthContext } from "@/src/context/AuthContext"
import { RestaurantContext } from "@/src/context/RestaurantsContext"
import { useContext, useEffect } from "react"

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    const {loadMyRestaurants, myRestaurants} = useContext(RestaurantContext)

    useEffect(()=> {
        load()
    }, [])

    const load = async () => {
        await loadMyRestaurants(user?.id!)
    }
  return (
    <section className="flex flex-col items-center gap-10">
        <h1 className="text-4xl font-semibold">Mis restaurantes</h1>
        <div className="flex flex-col gap-5">
            {myRestaurants.map(res => (
                <MyCard key={res.id} restaurant={res} />
            ))}
        </div>

    </section>
  )
}

export default Dashboard