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
import ActiveMenu from '../components/ActiveMenu';
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
					const q = query(menuRef, where('url_name', 'in', req.data), limit(5))
					const sp = await getDocs(q)
					sp.forEach((doc) =>
					{
						tempArr.push(doc.data())
					})
				}
				let active = tempArr.filter((item) => item["isActive"] === true);

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
			query: { isEdit: true, slug: menus['url_name'], step: 2 }
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
				if (!prevStatus)
				{
					if (menuList[i] !== menuName)
					{
						const activeRef = doc(db, "menus", menuList[i]);
						batch.update(activeRef, { "isActive": false })
					}
				} else
				{
					const activeRef = doc(db, "menus", menuList[i]);
					batch.update(activeRef, { "isActive": false })
				}
			}
			if (!prevStatus)
			{
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
					<div className=" container mx-auto ">
						<div className='w-full relative pb-24 mb-12'>
							<div className='flex'>
								<BsCalendar2Check className='w-6 h-6 mr-2 xl:hidden lg:hidden md:hidden block' />
								<h4 className='font-semibold mb-0 text-sm'>Today's Menu</h4>
							</div>
							<div className="w-full h-auto">
								{activeMenu === null || activeMenu.length === 0 ?
									<h1 className='text-primary-gray text-sm'>No active Menu</h1>
									: <ActiveMenu props={activeMenu[0]} handleSetActive={handleSetActive} loading={loading} />}
							</div>
							<div className='xl:block lg:block md:block hidden'>
								<BsCalendar2Check className='w-6 h-6 absolute -left-12 top-0' />
								<div className='h-full border  border-primary-gray/40 rounded mt-2 absolute -left-9 top-6'></div>
							</div>
						</div>
						<div className='w-full relative mt-2'>
							<Link href="/create/add-menu" >
								<div className='flex items-center justify-between'>
									<div className='flex'>
										<SiDatabricks className='w-6 h-6 mr-2 xl:hidden lg:hidden md:hidden block' />
										<h4 className='font-semibold mb-0'>My Menus</h4>
									</div>
									<button className='flex items-center p-2 border rounded text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-white ring-1 ring-primary-blue transition-colors font-semibold'>
										<AiFillPlusCircle className='w-4 h-4 mr-1' />
										Add Menu
									</button>
								</div>
							</Link>
							<div className="w-full h-auto mt-2 space-y-4">
								{userMenus && userMenus?.length !== 0 ? userMenus.map((menu, index) =>
									<div key={index} className="w-full border p-4 rounded relative shadow-sm">
										<CategoryList props={menu} index={index} handleDelete={handleDelete} handleEdit={handleEdit} handleSetActive={handleSetActive} loading={loading} />
									</div>

								) : <h1 className='text-sm'>No menus available</h1>}
							</div>
							<div className='xl:block lg:block md:block hidden'>
								<SiDatabricks className='w-6 h-6 absolute -left-12 top-0' />
								<div className='h-12 border  border-primary-gray/40 rounded mt-2 absolute -left-9 top-6'></div>
							</div>
						</div>



					</div>

				</div>
			</section>
		</main >
	);
}





export default Dashboard;
