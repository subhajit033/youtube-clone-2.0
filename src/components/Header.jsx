import React from 'react'
import Logo from './childcomponents/Logo'
import Searchbar from './childcomponents/Searchbar'
import UserInfo from './childcomponents/UserInfo'
const Header = () => {
  return (
    <div className='flex justify-between px-4 py-4'>
      <Logo />
      <Searchbar />
      <UserInfo />
    </div>
  )
}

export default Header