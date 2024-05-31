import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function Header() {
  return (
    <header className='p-4 w-screen'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className=''>
          <Link href="/">
          
            <Image 
                src="/image.png" // Path to your logo image in the public directory
                alt="image"
                width={50} // Set the width of the logo
                height={25} // Set the height of the logo
              />
            
            
          </Link>
        </div>
        <nav className='flex justify-end'>
          <Link href="/" className='mx-8'>
            Home
          </Link>
          <Link href="/profile" className='mx-8'>
            Profile
          </Link>
          <Link href="/desc" className='mx-8'>
            Descriptions
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header