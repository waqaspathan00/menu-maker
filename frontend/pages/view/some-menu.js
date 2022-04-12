import React from 'react'
import { Categories } from '../../components/categories'
import Footer from '../../components/footer'
import MenuItem from '../../components/MenuItem'
import {MdOutlineArrowBack} from 'react-icons/md'
// import { useNavigate } from 'react-router-dom'
import Modal from "../../components/Modal";
import  Router  from 'next/router'
import { useState, useEffect } from "react";
import axios from 'axios'



const SomeMenu = () => {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false)

  const clicked = () => {
    setModalOn(true)
  }

  // useEffect(() => {
  //   // GET request using axios inside useEffect React hook
  //   axios.get('http://localhost:8000/view/Mario')
  //     .then(data => {
        
  //       console.log(data.data)
  //     }) 
  // })
  // // const navigate = useNavigate()

  return (
    <div>
      <div className='h-1/5'>
        <button onClick={() => Router.back()} >
          <MdOutlineArrowBack className="p-2 text-5xl"/>
        </button>
        <p className="flex justify-center pb-5 text-base">Some Menu</p>
        <Categories />
        <button className="grid w-full justify-items-center" onClick={clicked}>

          <MenuItem />
        </button>
        <footer className='h-24'></footer>
      </div>
          <Footer/>
          {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />}
    </div>
  )
}

export default SomeMenu
