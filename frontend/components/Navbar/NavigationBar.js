import "bootstrap/dist/css/bootstrap.min.css"
import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../../lib/context";
import {Navbar, Nav, Container} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import {signInWithGoogle, signOutWithGoogle, details} from "../../lib/firebase";
import {useRouter} from "next/router";
import { getAdditionalUserInfo } from "firebase/auth";

export default function NavigationBar() {
    const {userData} = useContext(UserContext);

    return (
        <>
            <Navbar className={"w-full p-3"} fixed={"top"} expand={"md"}
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
            </Navbar>

        </>
    )
}

/**
 *
 */
const TryItFreeButton = () => {
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
const SignOutButton = () => {
    return (
        <button className={"w-40 px-2 py-2 bg-white rounded-lg flex justify-around items-center"}
                onClick={signOutWithGoogle} >
            <span className={"text-lg"}>Sign Out</span>
        </button>
    )
}