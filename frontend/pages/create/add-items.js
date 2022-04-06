/* React JS Template using functions */
import React, { useContext, useEffect, useState } from "react"
import BreadCrumb from '/components/Breadcrumb/BreadCrumb'
import { NewMenuContext } from "/lib/context";
import { useRouter } from 'next/router'
import { AiFillPlusCircle } from 'react-icons/ai'
import { MdArrowRightAlt } from 'react-icons/md'
import { toast } from "react-toastify";
import NewCategory from "/components/Inputs/NewCategory"

export default function AddItems()
{
    const { step, setStep, newMenu } = useContext(NewMenuContext);
    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();
    useEffect(() =>
    {
        // if (step === 1 || step === 3)
        // {
        setStep(2);
        // } else {
        //     router.push("/create/add-menu")
        // }
    }, [])

    return (
        <main className="mt-4 h-auto relative">
            <div className="container mx-auto">
                <BreadCrumb step={step} />
            </div>
            <section className="mt-0 h-[calc(100vh-275px)] container mx-auto p-4 relative">
                <div className="xl:w-3/4 lg:w-3/4 w-full mx-auto p-4 space-y-4 flex flex-col">
                    <div className="space-y-4">
                        <div className="flex items-center border p-4">
                            <h1 className="text-lg font-medium">{newMenu["menu-name"]}'s dishes</h1>
                            <p className="text-xs ml-auto">{newMenu["menu-data"][0].items.length} items</p>
                        </div>
                        <div>
                            {newMenu["menu-data"][0].items.length < 1 && <div className="text-center bg-primary-gray/10 text-sm p-4">No items available</div>}
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center space-y-2 absolute bottom-0 xl:w-3/4 lg:w-3/4 w-full mx-auto">
                        <div className="flex space-x-2">
                            <button className="px-6 py-2 border border-primary-blue text-primary-blue font-bold rounded flex items-center hover:bg-primary-blue hover:text-white transition-colors xl:w-fit lg:w-fit md:w-fit sm:w-fit xs:w-fit w-full text-sm justify-center" onClick={() => setIsOpen(true)}>
                                <AiFillPlusCircle className="w-6 h-6 mr-2" />
                                Create new category
                            </button>
                            <button className="px-6 py-2 border border-primary-blue text-primary-blue font-bold rounded flex items-center hover:bg-primary-blue hover:text-white transition-colors xl:w-fit lg:w-fit md:w-fit sm:w-fit xs:w-fit w-full text-sm justify-center" onClick={() =>
                            {
                                if (categories.length === 0)
                                {
                                    toast.warning("You must add a new category to add a new dish")
                                }
                            }}>
                                <AiFillPlusCircle className="w-6 h-6 mr-2" />
                                Add New Dish
                            </button>

                        </div>
                        <button className="px-6 py-2  text-primary-black font-bold flex items-center  hover:text-primary-black/50 transition-colors  xl:w-fit lg:w-fit md:w-fit sm:w-fit  xs:w-fit w-full justify-center">
                            Submit
                            <MdArrowRightAlt className="w-6 h-6 ml-2" />

                        </button>
                    </div>
                </div>
            </section >
            {isOpen ? <NewCategory setCategories={setCategories} categories={categories} setIsOpen={setIsOpen} /> : ""}
        </main>
    )

}


