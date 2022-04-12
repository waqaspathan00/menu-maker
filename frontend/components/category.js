import React, {useState} from 'react'
import {MdOutlineArrowForward} from 'react-icons/md'
import Modal from './Modal'

export default function Category(props) {
  const [modalOn, setModalOn] = useState(false)
  const [choice, setChoice] = useState(false)

  const clicked = () => {
      setModalOn(true)
  }

  // console.log(props)
  return (
      <div className="grid w-full p-2 justify-items-center">
        <button className="relative w-full h-32 overflow-hidden rounded-lg shadow-2xl" onClick={clicked} >
          <img className="absolute inset-0 object-cover w-full h-full bg-black" />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
          <div className="relative flex items-center justify-center h-full ">
            {/* <div /> */}
            {/* <MdOutlineArrowForward className="px-2 text-5xl text-white justify-self-end" /> */}
            <h2 className='text-2xl font-semibold text-white'>{props.children['category-title']}</h2>  
          </div>
        </button>
        {modalOn ? <Modal Modal setModalOn={setModalOn} setChoice={setChoice} props={props}/> : null}
      </div>
  )
}




