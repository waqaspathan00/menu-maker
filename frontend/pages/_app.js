import '../styles/globals.css';
import { useUserData } from "../lib/hooks";
import { NewMenuProvider, UserContext } from "../lib/context";
import Navbar from "/components/NavigationBar/NavigationBar";
import React, { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
    const userData = useUserData();
    const [step, setStep] = useState(1);

    return (
        <div>
            <UserContext.Provider value={{ userData, step, setStep }}>
                <title>Menu Mate</title>
                <Navbar />
                <NewMenuProvider>
                    <Component {...pageProps} />
                    <ToastContainer position='top-right' />
                </NewMenuProvider>
            </UserContext.Provider>
        </div>
    )
}

export default MyApp
