import axios from 'axios';
import React, {useContext, useState} from 'react'
import NavigationBar from '../components/Navbar/NavigationBar'
import {MenusContext, NewMenuContext, UserContext} from '../lib/context';
import Router from 'next/router'
import {toast} from "react-toastify";

export default function register() {

    const {userData} = useContext(UserContext);
    const {newMenu, setNewMenu} = useContext(NewMenuContext)
    const {setBusName} = useContext(MenusContext);
    const [busName, setBussName] = useState('')
    const handleChange = (e) => {
        setBussName(e.currentTarget.value)
    }

    async function handleSubmit(e) {
        e.preventDefault();


        if (!userData.loading) {
            const uid = userData.user.uid

            await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + 'api/register/', {
                uid: uid,
                "business-name": busName
            }).then(function (response) {
                if (response.status === 200) {
                    let temp = newMenu;
                    temp["menu-name"] = busName;
                    setNewMenu(temp);
                    setBusName(busName)
                    Router.push('/create/add-items?step=2&first-time-login=true')
                }
            }).catch(function (error) {
                toast.error("You have already registered a business name")
            });
        }
    }


    return (
        <div>
            <p className='text-3xl text-center font-logo'>Welcome!</p>
            <p className='p-2 text-center font-logo'>To get started, register with your business name</p>
            <form className='flex flex-col items-center p-4'>
                <input type="text"
                       className="block  w-full bg-[#F9F9F9] h-11 border border-[#DADADA] rounded-sm mt-4 pl-4"
                       placeholder="Enter business name..." value={busName} onChange={handleChange} required/>
                <button
                    className="flex items-center justify-center w-full py-2 font-semibold text-white transition-colors rounded mt-2px-6 bg-primary-green hover:bg-primary-green/70"
                    onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}
