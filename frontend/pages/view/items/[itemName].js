import React from 'react'
import {MdOutlineArrowForward} from 'react-icons/md'


export default function ItemName(props) {

  console.log(props)
  return (
      <div className="grid w-full p-2 justify-items-center">
        <div className="relative w-11/12 h-32 overflow-hidden rounded-lg shadow-2xl " >
          <img className="absolute inset-0 object-cover w-full h-full" src="https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg" alt='no' />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
          <div className="relative grid h-full grid-cols-2 place-content-between">
            <div />
            <MdOutlineArrowForward className="px-2 text-5xl text-white justify-self-end" />
            <h2 className='p-2 font-semibold text-left text-white text-l'>{props.children['item-name']}</h2>  
            <h2 className='p-2 text-2xl font-semibold text-right text-white'>${props.children['item-price']}</h2>  
          </div>
        </div>
      </div>
  )
}