import {loginWithGoogle, logoutWithGoogle} from "../lib/firebase";
import Image from "next/Image";

export default function Home() {
    return (
        <div>
            <SplashSection/>
        </div>
    )
}

const SplashSection = () => {
    return (
        <div className={"flex flex-col items-center"}>
            <h1 className={"text-4xl font-rock-salt my-6"}>Menu Mate</h1>
            <h2 className={"text-sm text-center mx-12 my-4"}>QUICKLY AND EASILY CREATE SHAREABLE MENUS</h2>
            <div className={"w-1/2 border-2 border-gray-300"}></div>
            <h3 className={"text-md text-center mx-8 my-4"}>Get the benefit of an online presence without the cost of
                hiring a web developer</h3>
            <div className={"flex relative justify-center items-center h-72"}>
                <img src={"/assets/img/home/mobile-view-menus.png"} className={"w-2/5 absolute top-0 left-8 z-10 styled-img"}/>
                <img src={"/assets/img/home/desktop-view-menus.png"} className={"w-11/12 styled-img"}/>
            </div>
        </div>
    )
}

const TutorialSection = () => {

}