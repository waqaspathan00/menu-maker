import {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8"/>
                {/*<meta name="viewport" content="width=device-width, initial-scale=1"/>*/}
            </Head>

            <body>
                <Main/>
                <NextScript/>

            </body>
        </Html>
    )
}