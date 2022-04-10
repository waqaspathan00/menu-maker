import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css';
import { useUserData } from "../lib/hooks";
import { NewMenuProvider, UserContext } from "../lib/context";
import NavigationBar from "/components/Navbar/NavigationBar";
import React, { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuickNavBar from "../components/Navbar/QuickNavBar";

function MyApp({ Component, pageProps }) {
    const userData = useUserData();
    const [step, setStep] = useState(1);

    return (
        <div>
            <UserContext.Provider value={{ userData, step, setStep }}>
                <title>Menu Mate</title>
                <NewMenuProvider>
                    <Component {...pageProps} />
                    <ToastContainer position='top-right' />
                </NewMenuProvider>
                <QuickNavBar/>
            </UserContext.Provider>
        </div>
    )
}

export default MyApp
