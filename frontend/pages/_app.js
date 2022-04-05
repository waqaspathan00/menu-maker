import '../styles/globals.css'
import { useUserData } from "../lib/hooks";
import { NewMenuProvider, UserContext } from "../lib/context";
import Navbar from "/components/Navbar/Navbar";
import React, { useState } from "react";

function MyApp({ Component, pageProps })
{

    const userData = useUserData();
    const [step, setStep] = useState(1);

    return (
        <UserContext.Provider value={{ userData, step, setStep }}>
            <title>Menu Mate</title>
            <Navbar />
            <NewMenuProvider>
                <Component {...pageProps} />
            </NewMenuProvider>
        </UserContext.Provider>
    )
}

export default MyApp
