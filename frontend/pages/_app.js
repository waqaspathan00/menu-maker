import '../styles/globals.css';
import { useUserData } from "../lib/hooks";
import { MenusProvider, NewMenuProvider, UserContext } from "../lib/context";
import Navbar from "/components/Navbar/Navbar";
import React, { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps })
{

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
                </MenusProvider>
            </UserContext.Provider>
        </>
    )
}

export default MyApp;
