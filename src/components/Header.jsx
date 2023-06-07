import React from 'react'
import Filters from './Filters'
import Cart from './Cart'

function Header() {
  return (
    <header className='py-2'>
      <section className='max-w-screen-2xl mx-auto relative'>
        <h1 className='text-center font-semibold text-3xl py-1'>Shopping Cart App</h1>
        <Cart />
        <Filters/>
      </section>
    </header>
  )
}

export default Header