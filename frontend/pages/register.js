import axios from 'axios';
import React, { useContext, useState } from 'react'
import NavigationBar from '../components/Navbar/NavigationBar'
import { UserContext } from '../lib/context';
import Router from 'next/router'

export default function register() {

  const {userData} = useContext(UserContext);
  const [busName, setBusName] = useState("");

  const handleChange = (e) =>
	{
		setBusName(e.currentTarget.value);
	}

  async function handleSubmit(e) {
    e.preventDefault();
    if (!userData.loading){
      const uid = userData.user.uid

      // await axios.post('http://127.0.0.1:8000/api/register/', {  // localhost
      await axios.post('https://menumate.herokuapp.com/api/register/', {  // production
        uid: uid,
        "business-name": busName
      })
      .then(function (response) {
        if (response.status == 200){
          Router.push('/create/add-items')
        };
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  
  return (
    <div>
        <NavigationBar/>
        <p className='text-3xl text-center font-logo'>Welcome!</p>
        <p className='p-2 text-center font-logo'>To get started, register with your business name</p>
        <form className='flex flex-col items-center p-4'>
				  <input type="text" className="block  w-full bg-[#F9F9F9] h-11 border border-[#DADADA] rounded-sm mt-4 pl-4" placeholder="Enter business name..." value={busName} onChange={handleChange} required />
          <button className="flex items-center justify-center w-full py-2 font-semibold text-white transition-colors rounded mt-2px-6 bg-primary-green hover:bg-primary-green/70" onClick={handleSubmit} >
            Submit
          </button>
        </form>
    </div>
  )
}
