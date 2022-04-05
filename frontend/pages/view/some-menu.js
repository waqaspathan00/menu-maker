import React from 'react'
import { Categories } from '../components/categories'
import Footer from '../components/footer'
import MenuItem from '../components/MenuItem'
import {MdOutlineArrowBack} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Modal from "../components/Modal";

import { useState } from "react";



export const SomeMenu = () => {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false)

  const clicked = () => {
    setModalOn(true)
  }

  const navigate = useNavigate()

  return (
    <div>
      <div className='h-1/5'>
        <button onClick={() => navigate(-1)} >
          <MdOutlineArrowBack className="text-5xl p-2"/>
        </button>
        <p className="text-base flex justify-center  pb-5">Some Menu</p>
        <Categories />
        <button className="grid justify-items-center w-full" onClick={clicked}>
          <MenuItem />
        </button>
        <footer className='h-24'></footer>
      </div>
          <Footer/>
          {modalOn && < Modal setModalOn={setModalOn} setChoice={setChoice} />}
    </div>
  )
}
