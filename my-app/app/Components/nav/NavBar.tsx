import React from 'react'
import Search from '../Search'
import ButtonGame from '../defaults/ButtonGame'

const NavBar = () => {
  return (
    <nav>
      <header className='flex justify-between items-center'>
        <Search />
        <div className='flex items-center gap-4'>
          <ButtonGame text='Login' />
          <ButtonGame text='Sign Up' />
        </div>
      </header>
    </nav>
  )
}

export default NavBar
