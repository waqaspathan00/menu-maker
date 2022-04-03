import React from 'react'
import {loginWithGoogle} from './firebase/index'


function Home() {
  return (
    <>
        <p>hello?</p>
        <button onClick={loginWithGoogle}>Login w/ Google</button>
    </>
  )
}

export default Home