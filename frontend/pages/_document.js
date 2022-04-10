import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document()
{
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" />
                {/*<meta name="viewport" content="width=device-width, initial-scale=1"/>*/}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,600;0,800;0,900;1,400&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet"/>
            </Head>

            <body>
                <Main />
                <NextScript />

            </body>
        </Html>
    )
}