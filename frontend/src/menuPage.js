import React from 'react'
import Footer from './components/footer'
import SearchBar from './components/searchBar'

function menuPage() {
  return (
    <div>
        <p class="text-base flex justify-center pt-5 pb-5">NY's Kitchen</p>
        <div >
          <SearchBar />
        </div>
        <Footer/>
    </div>
  )
}

export default menuPage