/* React JS Template using functions */
import React, { useContext, useEffect, useState } from "react"
import BreadCrumb from '/components/Breadcrumb/BreadCrumb'
import { NewMenuContext } from "/lib/context";
import { useRouter } from 'next/router'
import { AiFillPlusCircle } from 'react-icons/ai'
import { MdArrowRightAlt } from 'react-icons/md'
import { toast } from "react-toastify";
import NewCategory from "/components/Inputs/NewCategory"
import NewItemInput from "/components/Inputs/NewItemInput";

import ItemList from "../../components/ItemList";

export default function AddItems()
{
    const { step, setStep, newMenu, currentCategories } = useContext(NewMenuContext);
    const [isOpen, setIsOpen] = useState(false);
    const [toggleAddItem, setToggle] = useState(false);
    const router = useRouter();

    useEffect(() =>
    {
        setStep(2);
    }, [])

    return (
        <main className="mt-4 h-auto w-full">
            <div className="container mx-auto">
                <BreadCrumb step={step} />
            </div>
            <section className="mt-0 h-auto container mx-auto p-4">
                <div className="xl:w-3/4 lg:w-3/4 w-full mx-auto p-4 space-y-4 flex flex-col">
                    <div className="space-y-4">
                        <div className="flex items-center border p-4">
                            <h1 className="text-lg font-medium">{newMenu["menu-name"]}'s dishes</h1>
                        </div>
                        <ul className="flex space-x-1">
                            <li className="text-xs text-gray-400">Available categories: </li>
                            {currentCategories.length > 0 ? currentCategories.map((category, index) =>
                            {
                                if (index < currentCategories.length - 1)
                                {
                                    return <li key={category} className="text-xs text-gray-800 font-semibold"> {category}, </li>
                                } else
                                {
                                    return <li key={category} className="text-xs text-gray-800 font-semibold"> {category} </li>
                                }
                            }) : null}
                        </ul>
                        <div className="space-y-4">
                            {newMenu['menu-data'].map((items, index) => <ItemList key={index} props={items} index={index} />)}
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between items-center space-y-2 w-full mx-auto pt-4">

                        <div className="flex flex-wrap w-fit">
                            <button className="px-6 m-1 py-2 border border-primary-blue text-primary-blue font-bold rounded flex items-center hover:bg-primary-blue hover:text-white transition-colors xl:w-fit lg:w-fit md:w-fit sm:w-fit xs:w-fit w-full text-sm justify-center" onClick={() => setIsOpen(true)}>
                                <AiFillPlusCircle className="w-6 h-6 mr-2" />
                                Create new category
                            </button>
                            <button className="px-6 m-1 py-2 border border-primary-blue text-primary-blue font-bold rounded flex items-center hover:bg-primary-blue hover:text-white transition-colors xl:w-fit lg:w-fit md:w-fit sm:w-fit xs:w-fit w-full text-sm justify-center" onClick={() =>
                            {
                                if (currentCategories.length === 0)
                                {
                                    toast.warning("You must add a new category to add a new dish", { pauseOnHover: false })
                                } else
                                {
                                    setToggle(true);
                                }
                            }}>
                                <AiFillPlusCircle className="w-6 h-6 mr-2" />
                                Add New Dish
                            </button>

                        </div>
                        <div className="pb-2 w-full  xl:w-fit lg:w-fit md:w-fit sm:w-fit  xs:w-fit">
                            <button className="px-6 py-2 font-semibold flex items-center text-white transition-colors  w-full justify-center bg-primary-green hover:bg-primary-green/70 rounded">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </section >
            {isOpen ? <NewCategory setIsOpen={setIsOpen} setToggle={setToggle} /> : ""}
            {toggleAddItem ? <NewItemInput categories={currentCategories} setToggle={setToggle} /> : null}
        </main>
    )
}


