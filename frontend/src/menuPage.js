import React from 'react'
import Footer from './components/footer'
import SearchBar from './components/searchBar'

function menuPage() {
  return (
    <>
        <p class="text-base">NY's Kitchen</p>
        <SearchBar />
        <Footer/>
    </>
  )
}

export default menuPage