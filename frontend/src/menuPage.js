import React from 'react'
import Footer from './components/footer'
import SearchBar from './components/searchBar'
import {loginWithGoogle} from "./firebase";

function menuPage() {
  return (
    <>
        <button onClick={() => {
            loginWithGoogle()
        }}>Login with Google</button>
        <p class="text-base">NY's Kitchen</p>
        <SearchBar />
        <Footer/>
    </>
  )
}

export default menuPage