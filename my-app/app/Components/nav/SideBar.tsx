import React from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'
import { FaHeart, FaHome } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import NavLink from './NavLink'
import Logo from '../defaults/Logo'

const SideBar = () => {

  const navLinks = [
    {
      label: 'Home',
      link: "/",
      icon: <FaHome />
    },
    {
      label: 'Category',
      link: "/category",
      icon: <MdDashboard />
    },
    {
      label: 'Games',
      link: "/games",
      icon: <MdDashboard />
    },
    {
      label: 'Wishlist',
      link: "/wishlist",
      icon: <FaHeart />
    },
    {
      label: 'Friends',
      link: "/friends",
      icon: <BsFillPeopleFill />
    },
  ]

  return (
    <div className='col-span-2'>
      <div className='py-5 px-10 h-screen sticky inset-0 flex flex-col items-start bg-black/30 text-gray-50'>
        <Logo />
        {navLinks.map((link) => (
          <NavLink navLink={link} />
        ))}
      </div>
    </div>
  )
}

export default SideBar