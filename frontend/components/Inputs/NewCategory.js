import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { NewMenuContext } from "../../lib/context";


/**
 * @param  {CallableFunction} setIsOpen = Will set this component to be opened or close.
 * @param  {CallableFunction} setToggle="" Optional. Will toggle the NewItemInput to 	open
 * @param  {string} type="" Optional. Will check if is in edit mode.
 * @param {string} prevCategory="" - Optional. Will hold the initial category when edition
 */
const NewCategory = ({ setIsOpen, setToggle = "", type = "", prevCategory = "" }) =>
{
	const [category, setCategory] = useState(prevCategory);
	const { currentCategories, setNewCategories, newMenu, setNewMenu
	} = useContext(NewMenuContext);

	const handleSubmit = (e) =>
	{
		e.preventDefault();
		let temp = category
		if (!temp.replace(/\s/g, '').length || category.length < 3)
		{
			toast.error("Category name is not valid");
		} else
		{
			// Logic of this condition will assume that the category already exists
			if (type === "edit")
			{
				// Will check if category changes
				if (category !== prevCategory)
				{
					// Clone newMenu array
					let tempMenu = { ...newMenu }

					// Find the index of the category
					const index = tempMenu["menu-data"].findIndex((item) => item['category-title'] === prevCategory);

					// Checks if category exists
					if (index !== -1)
					{
						// Update the category title to the new one
						tempMenu["menu-data"][index]["category-title"] = category;

						// Set the context of newmenu to the updated one
						setNewMenu(tempMenu);

						// Notify user that update event is successful
						toast.success(`${ category } is successfully updated!`, { pauseOnHover: false })
					}

					// Will update the array of categories
					let tempCategories = [...currentCategories];

					// Find index of the previous category
					let i = tempCategories.findIndex((item) => item === prevCategory)

					// Update the array
					tempCategories[i] = category;

					// Set the context to the updated array of categories
					setNewCategories(tempCategories)
				}

			} else
			{
				const tempCat = [...currentCategories];
				tempCat.push(category);
				setNewCategories(tempCat)
				toast.success(`${ category } is successfully added!`, { pauseOnHover: false })

				// Will open the add new dish modal.
				setToggle(true);
			}
		}
		setIsOpen(false);
		setCategory("");
	}

	const handleChange = (e) =>
	{
		setCategory(e.currentTarget.value);
	}

	return <div className=" fixed top-0 left-0 h-screen w-screen overflow-hidden bg-slate-900/70 grid place-items-center">
		<div className="w-96 border p-4 rounded shadow-xl bg-white">
			<h1 className="font-bold text-lg mb-2">{type === 'edit' ? 'Edit Category Name' : 'Enter Category Name'}</h1>
			<input type="text" className="block w-full border rounded p-2 bg-slate-50" placeholder="Vegetarian Options, Steaks" value={category} onChange={handleChange} />
			<div className="w-full flex mt-4 space-x-4">
				<button className="w-full text-center border border-primary-gray text-primary-gray hover:border-black hover:text-black rounded" type="button" onClick={() =>
				{
					setCategory("");
					setIsOpen(false);
				}}>Cancel</button>
				<button className="w-full text-center border border-primary-blue text-primary-blue text-base font-semibold hover:text-white hover:bg-primary-blue  rounded py-2 transition-colors" onClick={handleSubmit}>{type === "edit" ? "Update" : "Add"}</button>

			</div>

		</div>
	</div>
}

export default NewCategory;