import { BsCalendar2Check } from 'react-icons/bs'
import { SiDatabricks } from 'react-icons/si'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useCallback, useContext, useEffect, useState } from 'react';
import { MenusContext, UserContext } from '../lib/context';
import { menuRef, db } from '../lib/firebase'
import { query, where, getDocs, collection } from 'firebase/firestore'
import { useRouter } from 'next/router';
import CategoryList from '../components/ItemList/CategoryList';
import { async } from '@firebase/util';
import axios from 'axios';
import Link from 'next/link';
function Dashboard()
{
	const { userMenus, setUserMenu } = useContext(MenusContext);
	const { userData } = useContext(UserContext)
	const router = useRouter();
	const getMenuList = useCallback(async (isMounted) =>
	{
		if (isMounted) 
		{
			try
			{
				const req = await axios.get('http://127.0.0.1:8000/api/get-menus');
				let tempArr = []
				if (req.data.length > 0)
				{
					const q = query(menuRef, where('slug', 'in', req.data))
					const sp = await getDocs(q)
					sp.forEach((doc) =>
					{
						tempArr.push(doc.data())
					})
				}
				setUserMenu(tempArr)
			} catch (error)
			{
				console.error(error.response.data)
			}
		}


	}, [setUserMenu])

	useEffect(() =>
	{
		let isMounted = true;
		if (!userData.loading)
		{
			if (userData.user)
			{
				getMenuList(isMounted);
			} else
			{
				router.push("/")
			}
		}
		return () => isMounted = false;
	}, [userData.user, getMenuList, setUserMenu])

	return (
		<main className="mt-20">
			<section className="container mx-auto
		justify-center
		2xl:space-x-12
		lg:space-x-12
		space-x-0
		flex-wrap
		mt-0
		h-auto
		text-primary-black
		">
				<div className="flex w-full justify-evenly">
					<div className="">
						Restaurant info
					</div>
					<div className=" w-3/6 ">
						<div className='w-full relative pb-24 mb-12'>
							<h4 className='font-semibold'>Today's Menu</h4>
							<div className="w-full h-auto">
								<h1 className="text-4xl leading-loose font-black">Crazy Monday</h1>
								<ul className="flex w-full space-x-4 text-sm">
									<li>Breakfast</li>
									<li>|</li>
									<li>Lunch</li>
									<li>|</li>
									<li>Dinner</li>
								</ul>
							</div>
							<BsCalendar2Check className='w-6 h-6 absolute -left-12 top-0' />
							<div className='h-full border  border-primary-gray/40 rounded mt-2 absolute -left-9 top-6'></div>
						</div>
						<div className='w-full relative mt-2'>
							<Link href="/create/add-menu" >
								<div className='flex items-center justify-between'>
									<h4 className='font-semibold'>My Menus</h4>
									<button className='flex items-center p-2 border rounded text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-white transition-colors font-semibold'>
										<AiFillPlusCircle className='w-4 h-4 mr-1' />
										Add Menu
									</button>
								</div>
							</Link>
							<div className="w-full h-auto mt-4 space-y-4">
								{userMenus && userMenus?.length !== 0 ? userMenus.map((menu, index) =>
									<CategoryList props={menu} index={index} key={index} />
								) : <h1>No menus available</h1>}
							</div>
							<SiDatabricks className='w-6 h-6 absolute -left-12 top-0' />
							<div className='h-12 border  border-primary-gray/40 rounded mt-2 absolute -left-9 top-6'></div>
						</div>



					</div>

				</div>
			</section>
		</main >
	);
}





export default Dashboard;
