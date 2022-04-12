import '../styles/globals.css';
import { useUserData } from "../lib/hooks";
import { MenusProvider, NewMenuProvider, UserContext } from "../lib/context";
import NavigationBar from '/components/Navbar/NavigationBar'
import QuickNavBar from '/components/Navbar/QuickNavBar'
import React, { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/router';
import ProtectedRoute from "../components/ProtectedRoute";

const authRequired = ['/create/add-items', '/create/add-menu', '/dashboard']

function MyApp({ Component, pageProps })
{
    const userData = useUserData();
    const [step, setStep] = useState(1);
    const router = useRouter();

    return (
        <>
            <UserContext.Provider value={{ userData, step, setStep }}>
                <MenusProvider>
                    <NewMenuProvider>
                        <title>Menu Mate</title>
                        <div className="mt-48">
                            {authRequired.includes(router.pathname) ? (<ProtectedRoute>
                                <Component {...pageProps} />
                            </ProtectedRoute>) : <Component {...pageProps} />}
                        </div>
                        <ToastContainer position='top-right' />
                    </NewMenuProvider>
                    <QuickNavBar />
                </MenusProvider>
            </UserContext.Provider>
        </>
    )
}

export default MyApp;
