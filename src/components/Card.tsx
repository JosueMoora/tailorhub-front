/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import { Restaurant } from '../interfaces/appInterfaces'
import { renderStarsHome } from '../utils/Rating'

interface Props {
  key : number
  restaurant: Restaurant
}

const Card = ({restaurant}: Props) => {
  return (
    <section className='flex gap-5'>
      <figure className='rounded-3xl md:w-44 md:h-44  w-32 h-32'>
        <img alt='restaurant' src={restaurant?.image} className='md:w-full h-full rounded-3xl ' />
      </figure>
      <article className='flex flex-col justify-between py-4'>
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

export default Card