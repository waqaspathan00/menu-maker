import React from 'react'

const Footer = (props) => {

    return (
        <footer
            className="flex flex-row h-20 fixed bottom-0 w-full bg-white shadow-[0_0px_60px_-15px_rgba(0,0,0,0.5)] text-center lg:text-left z-50">
            <div className="w-1/2">
                <div className="pt-2 pl-4 text-base text-left font-logo align-center">{props.children}</div>
                {/*<div className="pb-4 pl-4 text-xs text-left text-gray-400 ">*/}
                {/*    124 Saint Andrews Ln Glen Cove, New York, 11542*/}
                {/*</div>*/}
            </div>
            <div className="absolute inset-x-0 bottom-0">
                <div className="p-4 text-xs text-right text-gray-400">
                    Mon-Fri: 8:30AM - 9PM <br></br>
                    Sat-Sun: 12:30PM-12AM
                </div>
            </div>

        </footer>
    )
}

export default Footer;