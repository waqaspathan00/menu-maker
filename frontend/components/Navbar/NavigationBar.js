import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";

export default function NavigationBar() {
    return (
        <>
            <Navbar collapseOnSelect className={"w-full p-6"} fixed={"top"} expand={"md"}
                    bg="primary" variant={"dark"}>
                <Container className={"flex justify-around transition-all"}>
                    <img className={"w-16 h-16 cursor-pointer"} src="/assets/logo.png" alt="logo"/>
                    <NavbarToggle aria-controls={"responsive-navbar-nav"}/>
                    <Navbar.Collapse className={"w-full"} id={"responsive-nav-nav"}>
                        <Nav className={"w-full justify-around"}>
                            <Nav.Link className={"px-4 my-2 transition-all hover:border-b-2 hover:border-b-gold"}
                                      href={"/"}>
                                How to use
                            </Nav.Link>
                            <Nav.Link className={"px-4 my-2 transition-all hover:border-b-2 hover:border-b-gold"}
                                      href={"/"}>
                                Who is this for?
                            </Nav.Link>
                            <Nav.Link className={"px-4 my-2 transition-all hover:border-b-2 hover:border-b-gold"}
                                      href={"/"}>
                                How to install
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

