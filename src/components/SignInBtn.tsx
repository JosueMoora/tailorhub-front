import Link from 'next/link'
import React from 'react'

const SignInBtn = () => {
  return (
    <Link href="/signIn" className='text-xl font-normal text-white'>
        ¿No tienes cuenta? Regístrate
    </Link>
  )
}

export default SignInBtn