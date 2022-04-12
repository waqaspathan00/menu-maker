import React from 'react'
import {MdOutlineFastfood} from 'react-icons/md'
// import { useNavigate } from 'react-router-dom';
import Link from 'next/link'


const MenuChoice = () => {
    // const navigate = useNavigate();

    return(
        <Link href="/view/some-menu" >
            <div className='flex flex-col items-center w-40 bg-black rounded-2xl h-fit '>
                        <MdOutlineFastfood className='m-3 text-white text-8xl'/>
                        <h2 className='pb-4 font-semibold text-white'>Some Menu</h2>
            </div>
        </Link>
        // <button onClick={() => navigate("/view/some-menu")} >
        //     <div className='flex flex-col items-center w-40 bg-black rounded-2xl h-fit '>
        //                 <MdOutlineFastfood className='m-3 text-white text-8xl'/>
        //                 <h2 className='pb-4 font-semibold text-white'>Some Menu</h2>
        //     </div>
        // </button>
    )
}

export default MenuChoice