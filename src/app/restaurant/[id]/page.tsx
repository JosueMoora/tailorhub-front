"use client"
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Comments from "@/src/components/Comments";
import FormComments from "@/src/components/FormComments";
import { AuthContext } from "@/src/context/AuthContext";
import { RestaurantContext } from "@/src/context/RestaurantsContext";
import { useContext, useEffect, useState } from "react";

const Restaurant =  ({params}: any) => {
  const {user} = useContext(AuthContext)
  const {loadComments, loadRestaurantById, comments, currentRestaurant, deleteComment} = useContext(RestaurantContext)
  const [edit, setEdit] = useState(false)
  useEffect(()=> {
    loadRestaurantById(params.id)
    loadComments(params.id)
  }, [])
  const {image, name, address, description, id} = currentRestaurant
   
  return (
    <>
      <div className="relative text-center -z-10 bg-black text-white py-24 h-[400px] rounded-3xl">
        <img
          alt="Restaurant"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl opacity-50"
          src={image}
        />
        <div className="relative h-full z-10 flex flex-col items-center justify-center">
          <h1 className="md:text-[56px] text-5xl font-semibold">{name}</h1>
          <p className="md:text-2xl text-xl font-semibold">{address}</p>
        </div>
      </div>

      <section className="flex max-md:flex-col md:p-10 p-5 gap-8">
        <article className="space-y-10 max-md:order-2 w-full">
          <p className="md:text-2xl text-xl font-normal">
            {description}
          </p>
          {comments.map(c => (
            <>
              <Comments key={c.id} comment={c} userId={user?.id!} deleteComment={deleteComment} edit={edit} setEdit={setEdit}   />
              {
                
              }
            </>
          ))}
        </article>
        <FormComments id={id} />
      </section>
    </>
  );
};

export default Restaurant;
