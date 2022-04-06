import { useState } from "react";
import { toast } from "react-toastify";
const NewCategory = ({ setCategories, setIsOpen, categories, providedCat = "" }) =>
{
	const [category, setCategory] = useState(providedCat);

	const handleSubmit = (e) =>
	{
		e.preventDefault();
		let temp = category
		if (!temp.replace(/\s/g, '').length || category.length < 3)
		{
			toast.error("Category name is not valid");
		} else
		{
			const tempArr = [...categories]
			tempArr.push(category);
			setCategories(tempArr);
			setIsOpen(false);
			toast.success(`${ category } is successfully added!`, { pauseOnHover: false })
		}
		setCategory("");
	}

	const handleChange = (e) =>
	{
		setCategory(e.currentTarget.value);
	}

	return <div className=" fixed top-0 left-0 h-screen w-screen overflow-hidden bg-slate-900/70 grid place-items-center">
		<div className="w-96 border p-4 rounded shadow-xl bg-white">
			<h1 className="font-bold text-lg mb-2">Enter Category Name</h1>
			<input type="text" className="block w-full border rounded p-2 bg-slate-50" placeholder="Vegetarian Options, Steaks" value={category} onChange={handleChange} />
			<div className="w-full flex mt-4 space-x-4">
				<button className="w-full text-center border border-primary-blue text-primary-blue text-base font-semibold hover:text-white hover:bg-primary-blue  rounded py-2 transition-colors" onClick={handleSubmit}>Add</button>
				<button className="w-full text-center border border-primary-gray text-primary-gray hover:border-black hover:text-black rounded" type="button" onClick={() =>
				{
					setCategory("");
					setIsOpen(false);
				}}>Cancel</button>
			</div>

		</div>
	</div>
}

export default NewCategory;