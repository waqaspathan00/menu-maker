import React from 'react'
import {MdOutlineFastfood} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';


const MenuChoice = () => {
    const navigate = useNavigate();

    return(
        <button onClick={() => navigate("/view/some-menu")} >
            <div className='flex flex-col items-center bg-black rounded-2xl h-fit w-40 '>
                        <MdOutlineFastfood className='text-8xl text-white m-3'/>
                        <h2 className='text-white font-semibold pb-4'>Some Menu</h2>  
            </div>
        </button>
    )
}

export default MenuChoice