import React, {useState} from 'react'
import {MdOutlineArrowForward} from 'react-icons/md'
import Modal from './Modal'



export default function MenuItem(props) {
  const [modalOn, setModalOn] = useState(false)
  const [choice, setChoice] = useState(false)

  const clicked = () => {
      setModalOn(true)
  }
//  For Button onClick={clicked}
  // console.log(props)
  return (
      <div className="grid w-full p-2 justify-items-center">
        <div className="relative w-full h-32 overflow-hidden rounded-lg shadow-2xl"  >
          <img className="absolute inset-0 object-cover w-full h-full bg-black" src={props.children["item-image"]}/>
          {/* <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div> */}
          <div className="relative grid h-full grid-cols-2 place-content-between">
            {/* <MdOutlineArrowForward className="px-2 text-5xl text-white justify-self-end" /> */}
            <h2 className='p-2 text-xl font-semibold text-left text-white'>{props.children['item-name']}</h2>  
            <h2 className='p-2 text-2xl font-semibold text-right text-white'>${props.children['item-price']}</h2>  
          </div>
        </div>
        {modalOn ? <Modal Modal setModalOn={setModalOn} setChoice={setChoice} props={props}/> : null}
      </div>
  )
}



