import React, { useContext, useState } from "react";
import { UserContext } from "../../lib/context";
import { signInWithGoogle, signOutWithGoogle } from "/lib/firebase";
import { useRouter } from "next/router";
import { BsGoogle, BsFillCaretDownFill } from 'react-icons/bs'
import { HiMenuAlt2 } from 'react-icons/hi'
import { Menu, Transition } from "@headlessui/react";
import Link from 'next/link'
import UserNav from "./UserNav";

export default function NavigationBar()
{
    const { userData } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
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
                                            <MyLink href="/#how-to-use">Learn How</MyLink>
                                        </Menu.Item>
                                        <Menu.Item as="li" className="hover:bg-primary-blue hover:text-white transition-colors  px-4 py-2">
                                            <MyLink href="#">Who is this for</MyLink>
                                        </Menu.Item>
                                        <Menu.Item as="li" className="hover:bg-primary-blue hover:text-white transition-colors  px-4 py-2">
                                            <MyLink href="#">How to install</MyLink>
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
                            <button className="px-6 border py-2 rounded-full bg-primary-blue text-base  text-white hover:bg-primary-blue/70 transition-colors">Start for free</button>
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
                    {userData.user ? <UserNav user={userData.user} /> : <button className="px-6 border py-2 rounded-full bg-primary-blue text-base  text-white hover:bg-primary-blue/70 transition-colors">Start for free</button>}
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
                                <Menu.Item as="li" className="hover:bg-primary-blue hover:text-white transition-colors px-4 py-2">
                                    <MyLink href="/#how-to-use">Learn How</MyLink>
                                </Menu.Item>
                                <Menu.Item as="li" className="hover:bg-primary-blue hover:text-white transition-colors  px-4 py-2">
                                    <MyLink href="#">Who is this for</MyLink>
                                </Menu.Item>
                                <Menu.Item as="li" className="hover:bg-primary-blue hover:text-white transition-colors  px-4 py-2">
                                    <MyLink href="#">How to install</MyLink>
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Link href="#">About Us</Link>
                  {!userData.user && !userData.loading ?  <button className="px-8 border py-2 rounded-full  border-primary-blue  text-primary-blue hover:bg-primary-blue hover:text-white transition-colors flex items-center justify-center xl:w-fit lg:w-fit md:w-fit w-full" onClick={signInWithGoogle}><BsGoogle className="mr-2" /> Login with Google </button> : null}
                </div>
                {!userData.loading && userData.user ? null :
                    <div className="pt-2">
                        <button className="px-8 border py-2 rounded-full  border-primary-blue  text-primary-blue hover:bg-primary-blue hover:text-white transition-colors flex items-center w-full justify-center" onClick={signInWithGoogle}><BsGoogle className="mr-2" /> Login with Google </button>
                    </div>}
            </Transition>



            {/* <Navbar className={"w-full p-3"} fixed={"top"} expand={"md"}
                    bg="primary" variant={"dark"}>
                <Container className={"flex justify-around transition-all"}>
                    <img className={"w-16 h-16 cursor-pointer"} src="/assets/logo.png" alt="logo"/>

                    <TryItFreeButton/>

                    <NavbarToggle aria-controls={"responsive-navbar-nav"}/>
                    <Navbar.Collapse className={"w-full"} id={"responsive-nav-nav"}>
                        <Nav className={"w-full justify-around"}>
                            <div/>
                            <ul className={"list-none flex text-lg flex-col md:flex-row"}>
                                <Nav.Link className={"px-4 my-2 transition-all hover:border-b-2 hover:border-b-gold"}
                                          href={"#how-to-use"}>
                                    How to use
                                </Nav.Link>
                                <Nav.Link className={"px-4 my-2 transition-all hover:border-b-2 hover:border-b-gold"}
                                          href={"#who-is-this-for"}>
                                    Who is this for?
                                </Nav.Link>
                                <Nav.Link className={"px-4 my-2 transition-all hover:border-b-2 hover:border-b-gold"}
                                          href={"#how-to-install"}>
                                    How to install
                                </Nav.Link>
                            </ul>

                            {userData.user ?
                                <SignOutButton/>
                                :
                                <SignInButton/>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

        </header>
    )
}

/**
 *
 */
const TryItFreeButton = () =>
{
    const router = useRouter();

    return (
        <button className={"px-2 py-2 bg-white rounded-lg flex justify-around items-center"}
            onClick={() => router.push("/create/add-items")}>
            <span className={"text-lg text-primary-blue"}>Try it Free</span>
        </button>
    )
}

/**
 * Shown when user is not signed in
 */
const SignInButton = () => {
    
    return (
        <button className={"w-40 px-2 py-2 bg-white rounded-lg flex justify-around items-center"}
                onClick={signInWithGoogle} >
            <img src={"/assets/img/nav/google.png"} className={"w-8"} alt={""}/>
            <span className={"text-lg"}>Sign in</span>
        </button>
    )
}

/**
 * Shown when user is signed in
 */
const SignOutButton = () =>
{
    return (
        <button className={"w-40 px-2 py-2 bg-white rounded-lg flex justify-around items-center"} onClick={signOutWithGoogle}>
            <span className={"text-lg"}>Sign Out</span>
        </button>
    )
}