import '../styles/globals.css';
import { useUserData } from "../lib/hooks";
import { NewMenuProvider, UserContext } from "../lib/context";
import Navbar from "/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';

function MyApp({ Component, pageProps })
{

    const userData = useUserData();
    const [step, setStep] = useState(1);
    return (
        <div className='overflow-hidden'>
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
