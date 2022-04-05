import '../styles/globals.css'
import {useUserData} from "../lib/hooks";
import {UserContext} from "../lib/context";
import Navbar from "/components/Navbar/Navbar";
import React from "react";

function MyApp({Component, pageProps}) {

    const userData = useUserData();

    return (
        <UserContext.Provider value={userData}>

            <title>Menu Mate</title>
            <Navbar />
            <Component {...pageProps} />
        </UserContext.Provider>
    )
}

export default MyApp
