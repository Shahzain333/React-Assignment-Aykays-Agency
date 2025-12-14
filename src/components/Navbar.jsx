import React from 'react'
import LogoUrl from '../../public/images/logo.webp' 

export default function Navbar() {
  return (
    <nav className='flex items-center justify-center gap-3 bg-primary color-primary pt-7'>
      <img width={40} src={LogoUrl} alt='Logo'/>
      <h1 className='text-2xl font-semibold'>Mybindle</h1>
    </nav>
  )
}
