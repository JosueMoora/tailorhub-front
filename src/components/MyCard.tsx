"use client"
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Restaurant } from '../interfaces/appInterfaces'
import { renderStarsHome } from '../utils/Rating'
import { useContext } from 'react';
import { RestaurantContext } from '../context/RestaurantsContext';

interface Props {
  key : number
  restaurant: Restaurant
}

const MyCard = ({restaurant}: Props) => {
  const {deleteRestaurant} = useContext(RestaurantContext)
  return (
    <section className='flex gap-5 border relative rounded-3xl '>
      <figure className='rounded-3xl md:w-60 md:h-44  w-32 h-32'>
        <img alt='restaurant' src={restaurant?.image} className='md:w-full h-full rounded-3xl ' />
      </figure>
      <article className='flex flex-col justify-between p-4 w-full'>
        <div className='flex justify-end gap-4'>
          <Link href={`/restaurant/edit/${restaurant.id}`} >
          <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8' viewBox="0 0 24 24"><path fill="currentColor" d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>
          </Link>
          <button onClick={e => {
            e.preventDefault()
            deleteRestaurant(restaurant.id)
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/></svg>
          </button>
        </div>
        <div className='flex flex-col gap-2'>
          <Link href={`/restaurant/${restaurant?.id}`}>
            <h2 className='md:text-4xl font-semibold'>{restaurant?.name}</h2>
          </Link>
          <p className='md:text-2xl font-normal'>{restaurant?.address}</p>
        </div>
        <div className='flex gap-2 items-center'>
          {renderStarsHome(restaurant.rating)}
          <span className='md:text-base font-normal hidden md:block'>({restaurant.comentarios}) comentarios</span>
        </div>
          <span className='md:text-base font-normal md:hidden'>({restaurant.comentarios}) comentarios</span>
      </article>
    </section>
  )
}

export default MyCard