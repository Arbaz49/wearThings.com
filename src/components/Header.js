import Link from 'next/link'
import React from 'react'
import CartDrawer from './CartDrawer'

const Header = () => {
  return (
    <div>
      <header className="text-whit body-font  bg-white shadow-lg">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <span className="ml-3 text-pink-500 text-xl">WearThings.com</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/tshirts"} className="mr-5 hover:text-gray-900 cursor-pointer">T-shirts</Link>
      <Link href={"/tshirts"} className="mr-5 hover:text-gray-900 cursor-pointer">Second Link</Link>
      <Link href={"/tshirts"} className="mr-5 hover:text-gray-900 cursor-pointer">Third Link</Link>
      <Link href={"/tshirts"} className="mr-5 hover:text-gray-900 cursor-pointer">Fourth Link</Link>
    </nav>
    <span className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-white mt-4 md:mt-0">
    <CartDrawer/>
    {/* <span>dbjk</span> */}
    </span>
  </div>
</header>
    </div>
  )
}

export default Header