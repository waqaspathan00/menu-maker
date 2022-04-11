import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { NewMenuContext, MenusContext } from "../../lib/context";


function CategoryList({ props, index })
{

	const router = useRouter();
	const { newMenu, setNewMenu } = useContext(NewMenuContext);
	const { userMenus, setUserMenu } = useContext(MenusContext);
	const [isLoading, setLoading] = useState(false);
	function handleEdit(menus)
	{
		let temp = { ...newMenu };
		temp['menu-data'] = menus['menu-data'];
		temp['menu-name'] = menus['menu-name'];
		setNewMenu(menus);
		router.push({
			pathname: '/create/add-items',
			query: { isEdit: true, slug:props['slug'], step:2 }
		})
	}

	async function handleDelete(e)
	{
		e.preventDefault();
		setLoading(true);
		try
		{
			const req = await fetch(`http://127.0.0.1:8000/api/delete/${ props['slug'] }`, {
				method:"DELETE"
			})
			let temp = [...userMenus];
			temp.splice(index, 1);
			setUserMenu(temp);
			toast.success("Successfully deleted!");
		} catch (error)
		{
			console.error(error.message || error.description)
			toast.error(error.message || error.description)
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className='w-full border p-4 rounded relative'>
			<h1 className='text-xl font-bold'>{props["menu-name"]}</h1>
			<ul className="flex text-sm space-x-4">
				{props["menu-data"].map((category, index) =>
					<li key={index}>
						<h4>{category['category-title']}</h4>
					</li>
				)}
			</ul>
			<div className="text-sm mt-4 flex justify-between">
				<div className="space-x-4">
					<button className="font-semibold" onClick={() => handleEdit(props)} disabled={isLoading}>Edit</button>
					<button className="font-semibold" disabled={isLoading}>View</button>
					<button className="font-semibold text-primary-red" disabled={isLoading} onClick={handleDelete}>Delete</button>
				</div>
				<div>
					<button className="font-semibold text-primary-blue" disabled={isLoading}>Set active</button>
				</div>
			</div>
			{isLoading ? <div className="absolute right-4 top-4 text-xs flex items-center">
				Processing
				<svg className="animate-spin ml-2 h-5 w-5 text-primary-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
					<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
					<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
				</svg>
			</div> : ""}

		</div>
	)
}

export default CategoryList;