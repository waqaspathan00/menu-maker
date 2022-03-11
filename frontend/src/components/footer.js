import React from 'react'

const Footer = () => {
    return(
        <footer class="flex flex-row absolute bottom-0 w-full bg-white shadow-[0_0px_60px_-15px_rgba(0,0,0,0.5)] text-center lg:text-left">
            <div class="w-1/2">
                <div class="text-left text-base align-center pl-4 pt-2">
                    NY Kitchen
                </div>
                <div class=" text-left text-xs text-gray-400 pl-4 pb-4">
                    124 Saint Andrews Ln Glen Cove, New York, 11542
                </div>
            </div>
            <div class="absolute inset-x-0 bottom-0">
                <div class="text-xs text-gray-400 text-right  p-4">
                    Mon-Fri: 8:30AM - 9PM <br></br>   
                    Sat-Sun: 12:30PM-12AM
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;