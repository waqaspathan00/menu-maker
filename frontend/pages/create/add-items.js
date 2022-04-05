/* React JS Template using functions */
import React, { useContext, useEffect, useState } from "react"
import BreadCrumb from '/components/Breadcrumb/BreadCrumb'
import { NewMenuContext } from "/lib/context";
export default function AddItems()
{
    const { step, setStep, newMenu } = useContext(NewMenuContext);

    useEffect(() =>
    {
        setStep(2);
    }, [])

    return (
        <main className="mt-4 h-auto grid place-items-center">
            <div className="container mx-auto">
                <BreadCrumb step={step} />
            </div>
            <div>
                {console.log(newMenu)}
            </div>
        </main>

    )
}
