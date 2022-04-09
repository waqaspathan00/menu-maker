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
        <div className={"flex flex-col items-center"}>
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
        <div className={"flex flex-col items-center my-8"}>
            <h2 className={"text-2xl text-center font-bold"}>Let me show you how in 2 simple steps</h2>
            <div className={"flex"}>
                <div className={"flex flex-col items-center"}>
                    <h3 className={"text-xl font-bold"}>FIRST</h3>
                    <h4>Enter the items on your menu</h4>
                    <img src={"/assets/img/home/first-step-add.png"} className={"w-28"}/>
                </div>

                <img src={"/assets/img/home/mobile-add-item.png"} className={"w-2/5"}/>
            </div>
        </div>
    )
}