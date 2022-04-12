import React from "react";
import Link from "next/link"

export default function QuickNavBar() {
    return (
        <>
            <div className={"h-20"}></div>
            <div className='w-full z-20 h-20 fixed bottom-0 flex justify-around items-center bg-lavender'>
                <div className='bn-tab'>
                    <Link href={"/"}>
                        <img className={"w-10 cursor-pointer"} src={"/assets/img/nav/info.png"}/>
                    </Link>
                </div>
                <div className='bn-tab'>
                    <Link href={"/create/add-menu"}>
                        <img className={"w-10 cursor-pointer"} src={"/assets/img/nav/create-menu.png"}/>
                    </Link>
                </div>
                <div className='bn-tab'>
                    <Link href={"/dashboard"}>
                        <img className={"w-10 cursor-pointer"} src={"/assets/img/nav/profile.png"}/>
                    </Link>
                </div>
            </div>
        </>

    )
}

// .bottom-nav {
//   width: 100%;
//   height: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: fixed;
//   bottom: 0;
//   border-top: 1px solid rgb(230, 230, 230);
// }
// .bn-tab {
//   width: 25%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }