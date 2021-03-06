import MenuInput from '/components/Inputs/MenuInput.js'
import eatingCat from '/public/assets/img/eating-cat.png'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
import { NewMenuContext } from "/lib/context";
import BreadCrumb from '/components/Breadcrumb/BreadCrumb'


const AddMenu = () =>
{
    const { step, setStep } = useContext(NewMenuContext);


    useEffect(() =>
    {
        setStep(1);
    }, [])

    return (
        <main className="mt-4 h-auto grid place-items-center">

            <div className="container mx-auto">
                <BreadCrumb step={step} />
            </div>
            <section className="max-w-[1137px] mx-auto flex items-center
		justify-center
		2xl:space-x-12
		lg:space-x-12
		space-x-0
		flex-wrap
		mt-0
		h-[calc(100vh-275px)]
		">
                <div className='p-4 max-w-[425px]'>
                    <Image src={eatingCat} className="w-auto max-h-[444px]" alt="Cat eating a popcorn" width="444"
                        height={"425"} />
                </div>
                <div className="xl:max-w-[603px] lg:max-w-[603px] w-full p-4">
                    <div className="2xl:block lg:block hidden ">
                        <h1 className="text-4xl font-extrabold text-primary-black text-left leading-relaxed tracking-normal">Who
                            is this menu for?</h1>
                    </div>
                    <MenuInput setStep={setStep} />
                </div>
            </section>
        </main>
    )
}

export default AddMenu;