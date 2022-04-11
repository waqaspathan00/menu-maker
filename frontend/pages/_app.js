import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css';
import { useUserData } from "../lib/hooks";
import { MenusProvider, NewMenuProvider, UserContext   } from "../lib/context";
import Navbar, {NavigationBar, QuickNavBar}from "/components/Navbar/NavigationBar";
import React, { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuickNavBar from "../components/Navbar/QuickNavBar";

function MyApp({ Component, pageProps }) {
    const userData = useUserData();
    const [step, setStep] = useState(1);

    return (
        <>
            <UserContext.Provider value={{ userData, step, setStep }}>
                <MenusProvider>
                    <NewMenuProvider>
                        <title>Menu Mate</title>
                        <Navbar />
                        <Component {...pageProps} />
                        <ToastContainer position='top-right' />
                    </NewMenuProvider>
                    <QuickNavBar />
                </MenusProvider>
            </UserContext.Provider>
        </>
    )
}

export default MyApp;
