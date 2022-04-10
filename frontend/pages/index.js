import React, {Fragment} from "react";
import {loginWithGoogle, logoutWithGoogle} from "../lib/firebase";
import Image from "next/Image";

export default function Home({menus}) {

    return (
        <div>
            <SplashSection/>
            <TutorialSection/>
            <WhoIsThisForSection/>
            <InstallGuide/>
        </div>
    )
}

const SplashSection = () => {
    return (
        <div className={"flex flex-col items-center mt-28"}>
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
        <div className={"flex flex-col items-around bg-blue-gray"}>
            <h2 className={"text-3xl text-center font-bold my-8"}>Let us show you how in 2 simple steps</h2>
            <div className={"flex w-full h-80"}>
                <div className={"flex flex-col items-center justify-center"}>
                    <h3 className={"text-xl font-bold"}>FIRST</h3>
                    <h4 className={"text-center"}>Enter the items on your menu</h4>
                    <img src={"/assets/img/home/first-step-add.png"} className={"w-28"}/>
                </div>
                <div className={"w-3/4 relative"}>
                    <img src={"/assets/img/home/mobile-make-menu.png"}
                         className={"w-3/4 styled-img absolute right-12 -rotate-3"}/>
                    <img src={"/assets/img/home/mobile-add-item.png"}
                         className={"w-3/4 styled-img absolute top-20 right-4 rotate-6"}/>
                </div>
            </div>

            <div className={"my-20 flex h-80"}>
                <div className={"w-1/2"}>
                    <img src={"/assets/img/home/mobile-view-menu.png"}
                         className={"styled-img w-2/5 absolute left-2"}/>
                </div>
                <div className={"w-1/2 flex flex-col items-center justify-center pr-8"}>
                    <img src={"/assets/img/home/second-step-qr.png"} className={"w-16"}/>
                    <h3 className={"text-xl font-bold my-4"}>SECOND</h3>
                    <h4 className={"text-center"}>Share your menu by link or QR code</h4>
                    <div className={"flex items-center my-2"}>
                        <img src={"/assets/img/home/url.png"} className={"w-5"}/>
                        <p className={"text-xs text-dark-grey"}>menumate.app/marios</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const WhoIsThisForSection = () => {
    const TargetCustomerCard = ({image, title}) => {
        return (
            <div
                className={"flex bg-primary-blue rounded-2xl mx-2 my-4 items-center justify-around h-16 drop-shadow-md"}>
                <img src={`/assets/img/home/whoisthisfor/${image}.png`} className={"w-20"}/>
                <h4 className={"text-xl font-rock-salt font-bold text-white"}>{title}</h4>
            </div>
        )
    }

    return (
        <div className={"flex flex-col my-8"}>
            <h2 className={"text-3xl text-center font-bold my-4"}>Who is this for?</h2>
            <h3 className={"text-xl text-center"}>Home-based small business'</h3>

            <TargetCustomerCard image={"homecook"} title={"Home Cooks"}/>
            <TargetCustomerCard image={"jewelry"} title={"Jewelry Artisans"}/>
            <TargetCustomerCard image={"realtor"} title={"Realtors"}/>
            <TargetCustomerCard image={"wedding"} title={"Boutiques"}/>


        </div>
    )
}

const InstallGuide = () => {
    const InstructionStepCard = ({num, title, image}) => {
        return (
            <div className={"flex rounded-xl styled-img overflow-hidden justify-between mx-2 my-4"}>
                <div className={"bg-primary-blue font-bold flex items-center justify-center w-1/12"}>
                    <div className={"bg-white rounded-full text-center w-6"}>
                        {num}
                    </div>
                </div>
                <div className={"flex flex-col w-5/6 items-center pb-4 pr-4"}>
                    <h5 className={"text-lg"}>{title}</h5>
                    <img className={"styled-img w-full"} src={`/assets/img/home/installguide/${image}.jpg`}/>
                </div>
            </div>
        )
    }

    /** uncomment this when pwas are implemented */
    // const openShareMenu = async () => {
    //     if (navigation.canShare){
    //         navigator.share({
    //             files: filesArray,
    //             title: "PWAs are awesome!",
    //             text: "I learned how to build a PWA today",
    //         })
    //     }
    // }

    return (
        <div className={"flex flex-col items-center justify-center bg-blue-gray"}>
            <h2 className={"text-3xl text-center font-bold my-4"}>Install Menu Mate as an app</h2>
            <h3 className={"text-xl"}>In just 3 clicks!</h3>

            <InstructionStepCard
                num={"1"}
                title={
                    <Fragment>
                        <div className={"text-center flex items-center"}>
                            First, press the<strong>&nbsp;share icon</strong>
                            {/*<button onClick={openShareMenu}>*/}
                            <button>
                                <img className={"w-8"} src={"/assets/img/home/installguide/share.png"}/>
                            </button>
                        </div>
                    </Fragment>
                }
                image={"first-step-share"}
            />

            <InstructionStepCard
                num={"2"}
                title={
                    <Fragment>
                        <div className={"text-center"}>
                            Next, scroll down and press <strong>'Add to Home Screen'</strong>
                        </div>
                    </Fragment>
                }
                image={"second-step-add-home-screen"}
            />

            <InstructionStepCard
                num={"3"}
                title={
                    <Fragment>
                        <div className={"text-center"}>
                            Lastly, press <strong>'Add'</strong>
                        </div>
                    </Fragment>
                }
                image={"third-step-press-add"}
            />
        </div>
    )
}