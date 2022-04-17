import React, { useContext, useState } from "react";
import { UserContext } from "../../lib/context";
import { signInWithGoogle, signOutWithGoogle } from "/lib/firebase";
import { useRouter } from "next/router";
import { BsGoogle, BsFillCaretDownFill } from 'react-icons/bs'
import { HiMenuAlt2 } from 'react-icons/hi'
import { Menu, Transition } from "@headlessui/react";
import Link from 'next/link'
import UserNav from "./UserNav";

export default function NavigationBar() {
    const { userData } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
    function MyLink(props)
    {
        let { href, children, ...rest } = props
        return (
            <Link href={href}>
                <a {...rest}>{children}</a>
            </Link>
        )
    }

    if (userData.loading)
    {
        return null
    }

    return (
        <header className="w-full  h-auto shadow p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <div className="xl:contents lg:contents hidden">
                    <div className="flex items-center gap-x-4 relative">
                        <img src="/assets/logo.png" className="w-12 h-12" />
                        <div className="xl:contents lg:contents hidden">
                            <Link href="/">Home</Link>
                            <Menu as="div" className="relative">
                                <Menu.Button className="flex items-center gap-x-2">Learn <BsFillCaretDownFill /></Menu.Button>
                                <Transition
                                    as={React.Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items as="ul" className="absolute top-8 left-0 w-fit whitespace-nowrap border bg-white border-primary-gray/40 shadow-md rounded text-sm">
                                        <Menu.Item as="li" className="hover:bg-primary-blue hover:text-white transition-colors px-4 py-2">
                                            <MyLink href="#how-to-use">How to use</MyLink>
                                        </Menu.Item>
                                        <Menu.Item as="li" className="hover:bg-primary-blue hover:text-white transition-colors  px-4 py-2">
                                            <MyLink href="#who-this-is-for">Who this is for</MyLink>
                                        </Menu.Item>
                                        <Menu.Item as="li" className="hover:bg-primary-blue hover:text-white transition-colors  px-4 py-2">
                                            <MyLink href="#how-to-install">How to install</MyLink>
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            <Link href="#">About Us</Link>
                        </div>
                        {/* <h4 className=" font-rock-salt">Menu Maker</h4> */}
                    </div>
                    {!userData.loading && userData.user ? <UserNav user={userData.user} /> : <ul className="flex gap-x-4 h-full items-center">
                        <li>
                            <button onClick={() => router.push("/register")} className="px-6 border py-2 rounded-full bg-primary-blue text-base  text-white hover:bg-primary-blue/70 transition-colors">Start for free</button>
                        </li>
                        <li onClick={signInWithGoogle}>
                            <button className="px-8 border py-2 rounded-full  border-primary-blue  text-primary-blue hover:bg-primary-blue hover:text-white transition-colors flex items-center"><BsGoogle className="mr-2" /> Login with Google </button>
                        </li>
                    </ul>}

                </div>
                <div className="xl:hidden lg:hidden flex items-center gap-x-4 p-2 justify-between w-full">
                    <div>
                        <button className="flex items-center gap-x-2" onClick={() => setIsOpen(prev => !prev)}>
                            <HiMenuAlt2 className="w-6 h-6" /> <span>Menu</span>
                        </button>
                    </div>
                    {userData.loading ? "" : null}
                    {userData.user ? <UserNav user={userData.user} /> : <button onClick={() => router.push("/register")} className="px-6 border py-2 rounded-full bg-primary-blue text-base  text-white hover:bg-primary-blue/70 transition-colors">Start for free</button>}
                </div>
            </nav>
            <Transition
                show={isOpen}
                as="nav"
                enter="transition ease-out duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-75"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="grid gap-2 h-auto absolute top-21 bg-white w-full shadow-xl left-0 p-4 border z-50">
                    <Link href="#how-to-use">Home</Link>
                    <Menu as="div" className="relative ">
                        <Menu.Button className="flex items-center gap-x-2">Learn <BsFillCaretDownFill /></Menu.Button>
                        <Transition
                            as={React.Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items as="ul" className="absolute top-8 left-0 w-fit whitespace-nowrap border bg-white border-primary-gray/40 shadow-md rounded text-sm">
                                <Menu.Item as="li" className="hover:bg-primary-blue hover:text-white transition-colors  px-4 py-2">
                                    <MyLink href="#who-this-is-for">Who this is for</MyLink>
                                </Menu.Item>
                                <Menu.Item as="li" className="hover:bg-primary-blue hover:text-white transition-colors px-4 py-2">
                                    <MyLink href="#how-to-use">How to use</MyLink>
                                </Menu.Item>
                                <Menu.Item as="li" className="hover:bg-primary-blue hover:text-white transition-colors  px-4 py-2">
                                    <MyLink href="#how-to-install">How to install</MyLink>
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Link href="#">About Us</Link>
                    {!userData.user && !userData.loading ?  <button className="px-8 border py-2 rounded-full  border-primary-blue  text-primary-blue hover:bg-primary-blue hover:text-white transition-colors flex items-center justify-center xl:w-fit lg:w-fit md:w-fit w-full" onClick={signInWithGoogle}><BsGoogle className="mr-2" /> Sign in with Google </button> : null}
                </div>
                {!userData.loading && userData.user ? null :
                    <div className="pt-2">
                        <button className="px-8 border py-2 rounded-full  border-primary-blue  text-primary-blue hover:bg-primary-blue hover:text-white transition-colors flex items-center w-full justify-center" onClick={signInWithGoogle}><BsGoogle className="mr-2" /> Login with Google </button>
                    </div>}
            </Transition>
        </header>
    )
}
