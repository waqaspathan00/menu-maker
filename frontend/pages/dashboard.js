import { BsCalendar2Check } from 'react-icons/bs'
import { SiDatabricks } from 'react-icons/si'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useCallback, useContext, useEffect, useState } from 'react';
import { MenusContext, UserContext, NewMenuContext } from '../lib/context';
import { menuRef, db } from '../lib/firebase'
import { query, where, getDocs, limit, writeBatch, doc } from 'firebase/firestore'
import { useRouter } from 'next/router';
import CategoryList from '../components/ItemList/CategoryList';
import axios from 'axios';
import Link from 'next/link';
import { toast } from 'react-toastify';
function Dashboard()
{
	const { userMenus, setUserMenu } = useContext(MenusContext);
	const { setNewMenu } = useContext(NewMenuContext);
	const { userData } = useContext(UserContext);
	const [menuList, setMenuList] = useState(null);
	const [activeMenu, setActiveMenu] = useState(null);
	const router = useRouter();
	const [loading, setLoading] = useState(false);
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
					setMenuList(req.data);
					const q = query(menuRef, where('slug', 'in', req.data), limit(5))
					const sp = await getDocs(q)
					sp.forEach((doc) =>
					{
						tempArr.push(doc.data())
					})
				}
				let active = tempArr.filter((item) => item["isActive"] === true);
				console.log(active)
				setActiveMenu(active);
				setUserMenu(tempArr.filter(item => item["isActive"] === false))
			} catch (error)
			{
				console.error(error.message)
			}
		}
	}, [setUserMenu])
	function handleEdit(menus)
	{
		setNewMenu(menus);
		router.push({
			pathname: '/create/add-items',
			query: { isEdit: true, slug: menus['slug'], step: 2 }
		})
	}
	async function handleDelete(e, menu, index)
	{
		e.preventDefault();
		setLoading(true);
		try
		{
			const req = await fetch(`http://127.0.0.1:8000/api/delete/${ menu['slug'] }`, {
				method: "DELETE"
			})
			let temp = [...userMenus];
			temp.splice(index, 1);
			setUserMenu(temp);
			toast.success("Successfully deleted!");
		} catch (error)
		{
			console.error(error.message || error.description)
			toast.error(error.message || error.description)
		} finally
		{
			setLoading(false);
		}
	}

	async function handleSetActive(e, menuName, prevStatus = true)
	{
		e.preventDefault();
		setLoading(true);
		try
		{
			const batch = writeBatch(db);
			for (let i = 0; i < menuList.length; i++)
			{
				if(!prevStatus) {
					if (menuList[i] !== menuName)
					{
						const activeRef = doc(db, "menus", menuList[i]);
						batch.update(activeRef, { "isActive": false })
					}
				} else {
					const activeRef = doc(db, "menus", menuList[i]);
					batch.update(activeRef, { "isActive": false })
				}
			}
			if(!prevStatus) {
				const activeRef = doc(db, "menus", menuName);
				batch.update(activeRef, { "isActive": true })
			}
		

			await batch.commit();
		} catch (error)
		{
			toast.error(error.message)
		} finally
		{
			setLoading(false)
		}

	}

	useEffect(() =>
	{
		let isMounted = true;
		getMenuList(isMounted)
		return () => isMounted = false;
	}, [userData.user, getMenuList, setUserMenu, loading])

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
						{/* <button >wAZZAP</button> */}
						aceacaecaec
					</div>
					<div className=" w-3/6 ">
						<div className='w-full relative pb-24 mb-12'>
							<h4 className='font-semibold'>Today's Menu</h4>

							<div className="w-full h-auto">
								
								{activeMenu === null || activeMenu.length === 0 ? 	
									<h1 className='text-primary-gray'>No active Menu</h1>
									: <>	<h1 className="text-4xl leading-loose font-black">{(activeMenu[0]["menu-name"])}</h1>
									<ul className="flex space-x-4 text-sm">
										{activeMenu[0]["menu-data"].map((category, index) => <li key={index}>{category["category-title"]}</li>)}
									</ul>
										<button className="font-semibold text-primary-blue" disabled={loading} onClick={(e) => handleSetActive(e, activeMenu[0]["slug"], true)}>Set active</button>
									</>}
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
									<div key={index} className="w-full border p-4 rounded relative">
										{loading ? <div className="absolute right-4 top-4 text-xs flex items-center">
											Processing
											<svg className="animate-spin ml-2 h-5 w-5 text-primary-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
												<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
												<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
											</svg>
										</div> : ""}

										<CategoryList props={menu} index={index} />
										<div className='flex justify-between mt-4 text-sm'>
											<div className="space-x-4">
												<button className="font-semibold" onClick={() => handleEdit(menu)} disabled={loading}>Edit</button>
												<button className="font-semibold" disabled={loading}>View</button>
												<button className="font-semibold text-primary-red" disabled={loading} onClick={(e) => handleDelete(e, menu, index)}>Delete</button>
											</div>
											<div>
												<button className="font-semibold text-primary-blue" disabled={loading} onClick={(e) => handleSetActive(e, menu["slug"], false)}>Set active</button>
											</div>
											<div>
												{menu["isActive"] ? "Active" : "Not Active"}
											</div>
										</div>
									</div>

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
