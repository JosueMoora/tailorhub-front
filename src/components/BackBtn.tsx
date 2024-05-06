import Link from "next/link"



const BackBtn = ({url = ""}) => {
  return (
    <Link href={url} className='border py-4 px-8 rounded-3xl w-fit font-semibold text-white'>
        ←
    </Link>
  )
}

export default BackBtn