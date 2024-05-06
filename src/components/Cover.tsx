import Image from 'next/image'

const Cover = () => {
  return (
    <article className="flex h-[87vh] items-center justify-center bg-[#F1F1F0] rounded-3xl animate-fade-out animate-delay-1000">
        <Image alt="logo" src={'/logo.png'} width={194} height={44} />
    </article>
  )
}

export default Cover