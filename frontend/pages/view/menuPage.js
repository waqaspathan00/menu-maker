import React from 'react'
import Footer from '../../components/footer'
import SearchBar from '../../components/searchBar'
import MenuChoice from '../../components/MenuChoice'

function MenuPage() {

  return (
    <div>
      <div className='h-1/5'>
        <p className="flex justify-center pt-5 pb-5 text-base">NY's Kitchen</p>
        <SearchBar />
        <div className="grid grid-cols-2 mt-8 gap-y-5 justify-items-center" >
          <MenuChoice />
          <MenuChoice />
          <MenuChoice />
          <MenuChoice />
          <MenuChoice />
          <MenuChoice />
          <MenuChoice />
          <MenuChoice />
          <MenuChoice />
          <MenuChoice />
        </div>
        <footer className='h-24'></footer>
      </div>
          <Footer/>
    </div>
  )
}

export default MenuPage