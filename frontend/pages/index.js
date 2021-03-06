import React, {Fragment} from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import {BiLink} from 'react-icons/bi'
import {RiQrCodeLine} from 'react-icons/ri'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import {AiFillCheckCircle} from "react-icons/ai";

export default function Home({menus}) {

    return (
        <div className="text-primary-black scroll-smooth">
            {/* <NavigationBar/> */}
            <SplashSection/>
            <GoalsSection/>
            <WhoIsThisForSection/>
            <TutorialSection/>
            <InstallGuide/>
        </div>
    )
}

const SplashSection = () => {
    return (
        <div className={"flex flex-col items-center mt-4"}>
            <h1 className={"text-4xl font-rock-salt my-6"}>Menu Mate</h1>
            <h3 className={"text-sm text-center mx-12 my-4"}>QUICKLY AND EASILY CREATE SHAREABLE MENUS</h3>
            <div className={"w-1/2 border border-primary-gray-200 rounded"}></div>
            <h4 className={"text-md text-center mx-8 my-4"}>Get the benefit of an online presence without the cost of
                hiring a web developer</h4>
            <div className={"flex justify-center relative items-center h-auto container mt-4"}>
                <img src={"/assets/img/home/hero-1.png"}
                     className={"xl:w-3/4 lg:w-3/4 w-full"}/>
            </div>
        </div>
    )
}

const GoalsSection = () => {
    const Goal = ({content}) => {
        return (
            <div className={"flex items-center"}>
                <AiFillCheckCircle className={"w-8 h-8 mr-4 text-primary-green"}/>
                <h3 className={"text-lg"}>{content}</h3>
            </div>
        )
    }

    return (
        <div className={"flex justify-center"}>
            <div className={"flex flex-col items-start space-y-4 mt-12"}>
            <h2 className={"text-5xl w-full text-center font-bold"}>OUR GOALS</h2>
                <Goal content={"Quickness of a text"}/>
                <Goal content={"Share-ability of social media"}/>
                <Goal content={"Fluid experience for the end user"}/>
            </div>
        </div>
    )
}

const TutorialSection = () => {
    return (
        <div id={"how-to-use"}>
            <div className={"flex flex-col items-around bg-primary-blue my-10 p-4 text-white"}>
                <div className="container mx-auto pt-4 my-10">
                    <h2 className={"text-4xl text-center font-bold my-8"}>LET US SHOW YOU HOW - IN 2 STEPS</h2>
                    <div className={"flex w-full h-auto justify-evenly xl:flex-nowrap lg:flex-nowrap flex-wrap"}>
                        <div className={"flex flex-col items-center justify-center"}>
                            <MdOutlineRestaurantMenu className="w-48 h-48"/>
                            <h3 className={"text-4xl font-bold"}>FIRST</h3>
                            <h4 className={"text-center font-bold"}>Enter the items on your menu</h4>
                        </div>
                        <div className="w-fit">
                            <img src={"/assets/img/home/hero-2.png"}
                                 className={"  xl:max-w-[85%] lg:max-w-[85%] md:max-w-[85%]  max-w-[100%] mx-auto"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={"flex w-full h-auto justify-evenly xl:flex-nowrap lg:flex-nowrap flex-wrap-reverse my-12 items-center gap-4"}>
                <div className="w-fit flex justify-center">
                    <img src={"/assets/img/home/hero-3.png"}
                         className={"w-3/5 md:w-full"}/>
                </div>
                <div className="text-center">
                    <h3 className={"text-4xl font-bold my-4"}>SECOND</h3>
                    <div className="flex flex-col items-center">
                        <RiQrCodeLine className="w-48 h-48"/>
                        <h4 className={"text-center font-bold"}>Share your menu by link or QR code</h4>
                    </div>
                    <div className={"flex items-center my-2 text-center justify-center"}>
                        <p className={" text-dark-grey flex items-center"}><BiLink className="w-6 h-6"/>menumate.app/marios
                        </p>
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
                className={"flex bg-primary-blue rounded-2xl mx-2 my-4 items-center justify-around h-16 shadow-xl w-11/12 md:w-1/2"}>
                <img src={`/assets/img/home/whoisthisfor/${image}.png`} className={"w-20"}/>
                <h4 className={"text-xl font-rock-salt font-bold text-white"}>{title}</h4>
            </div>
        )
    }

    return (
        <div id={"who-this-is-for"} className={"flex flex-col items-center my-8"}>
            <h2 className={"text-5xl text-center font-bold my-4"}>WHO THIS IS FOR</h2>
            <h3 className={"text-xl text-center mt-12"}>Home-based small business'</h3>

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
            <div className={"flex rounded-xl styled-img overflow-hidden justify-between mx-2 my-4 md:w-1/2"}>
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
        <div id={"how-to-install"} className={"flex flex-col items-center justify-center bg-blue-gray"}>
            <h2 className={"text-4xl text-center font-bold my-4"}>INSTALL AS AN APP - IN 3 TAPS</h2>
            <h3 className={"text-xl"}>menumate.vercel.app</h3>

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