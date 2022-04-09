import {loginWithGoogle, logoutWithGoogle} from "../lib/firebase";
import Image from "next/Image";

export default function Home() {
    return (
        <div>
            <SplashSection/>
            <TutorialSection/>
        </div>
    )
}

const SplashSection = () => {
    return (
        <div className={"flex flex-col items-center bg-gradient-to-b from-white to-blue-gray"}>
            <h1 className={"text-4xl font-rock-salt my-6"}>Menu Mate</h1>
            <h3 className={"text-sm text-center mx-12 my-4"}>QUICKLY AND EASILY CREATE SHAREABLE MENUS</h3>
            <div className={"w-1/2 border-2 border-gray-300"}></div>
            <h4 className={"text-md text-center mx-8 my-4"}>Get the benefit of an online presence without the cost of
                hiring a web developer</h4>
            <div className={"flex relative justify-center items-center h-72"}>
                <img src={"/assets/img/home/mobile-view-menus.png"}
                     className={"w-2/5 absolute top-0 left-8 z-10 styled-img"}/>
                <img src={"/assets/img/home/desktop-view-menus.png"} className={"w-11/12 styled-img"}/>
            </div>
        </div>
    )
}

const TutorialSection = () => {
    return (
        <div className={"flex flex-col items-center relative bg-blue-gray"}>
            <h2 className={"text-2xl text-center font-bold my-8"}>Let me show you how in 2 simple steps</h2>
            <div className={"flex w-full h-80"}>
                <div className={"flex flex-col items-center justify-center"}>
                    <h3 className={"text-xl font-bold"}>FIRST</h3>
                    <h4 className={"text-center"}>Enter the items on your menu</h4>
                    <img src={"/assets/img/home/first-step-add.png"} className={"w-28"}/>
                </div>
                <div className={"w-3/4"}>
                    <img src={"/assets/img/home/mobile-make-menu.png"}
                         className={"w-2/5 styled-img absolute top-28 right-12 -rotate-3"}/>
                    <img src={"/assets/img/home/mobile-add-item.png"}
                         className={"w-2/5 styled-img absolute top-40 right-4 rotate-6"}/>
                </div>
            </div>
        </div>
    )
}