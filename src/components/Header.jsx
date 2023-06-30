import React from 'react'
import Logo from './childcomponents/Logo'
import Searchbar from './childcomponents/Searchbar'
import UserInfo from './childcomponents/UserInfo'
const Header = () => {
  return (
    <div className='flex justify-between px-6 py-4 shadow-lg'>
      <Logo />
      <Searchbar />
      <UserInfo />
    </div>
  )
}

export default Header