import React from 'react'
import {MdOutlineArrowForward} from 'react-icons/md'


const MenuItem = () => {
  return (
      <div className="grid justify-items-center w-full">
        <div className="w-11/12 h-32  rounded-lg shadow-2xl overflow-hidden relative " >
          <img className="absolute inset-0 h-full w-full object-cover" src="https://static.onecms.io/wp-content/uploads/sites/43/2022/02/16/21014-Good-old-Fashioned-Pancakes-mfs_001.jpg" alt='no' />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
          <div className="h-full grid grid-cols-2 place-content-between  relative">
            <div />
            <MdOutlineArrowForward className="justify-self-end text-white text-5xl px-2" />
            <h2 className='text-white text-2xl text-left font-semibold p-2'>Pancakes</h2>  
            <h2 className='text-white text-2xl text-right font-semibold p-2'>$8.00</h2>  
          </div>
        </div>
      </div>
  )
}

export default MenuItem;

