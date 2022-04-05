/* React JS Template using functions */
import React, { useContext, useEffect } from "react"
import BreadCrumb from '/components/Breadcrumb/BreadCrumb'
import { NewMenuContext } from "/lib/context";
import { useRouter } from 'next/router'
export default function AddItems()
{
    const { step, setStep, newMenu } = useContext(NewMenuContext);
    const router = useRouter();
    useEffect(() =>
    {
        if (step === 1 || step === 3)
        {
            setStep(2);
        } else {
            router.push("/create/add-menu")
        }
    }, [])

    return (
        <main className="mt-4 h-auto grid place-items-center">
            <div className="container mx-auto">
                <BreadCrumb step={step} />
            </div>
            <div>
                {console.log(router.query.step)}
            </div>
        </main>

    )
}
