import { useContext, useEffect, useState } from 'react';
import { AiOutlineLink, AiFillPlusCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { useUploadFile } from 'react-firebase-hooks/storage';

import { NewMenuContext, UserContext } from '../../lib/context';
import SushiIcon from '../SVG/SushiIcon';
import { storage } from '../../lib/firebase';
import { ref, getDownloadURL } from 'firebase/storage'
import { toast } from 'react-toastify';
import { findCategoryIndex, findDishIndex } from "/lib/utils"
import { async } from '@firebase/util';


/**
 * @param  {Function} setToggle - Gets the toggle state from create/add-items
 * @param  {String} type="" - holds whether is edit or not
 * @param  {Object} props - Dish information
 * @param  {String} prevCategory="" the initial category of this dish
 */
function NewItemInput({ setToggle, type = "", props, prevCategory = "" })
{
	// Holds the updated categories and it's respective menus
	const { newMenu, setNewMenu, currentCategories } = useContext(NewMenuContext);
	const { userData } = useContext(UserContext);


	// Holds basic information about single dish
	const [dishName, setDishName] = useState("");
	const [dishDesc, setDishDesc] = useState("");
	const [dishCat, setDishCat] = useState(type !== 'edit' ? currentCategories[currentCategories.length - 1] : prevCategory);
	const [dishPrice, setDishPrice] = useState("");
	const [dishImage, setDishImage] = useState(null);



	// Firebase upload
	const [uploadFile, uploading] = useUploadFile();



	async function upload()
	{
		if (dishImage)
		{
			const storageName = `${ userData.user.uid }/${ dishCat }/${ dishImage.name }`;
			const ref2 = ref(storage, storageName);
			try
			{
				const req = await uploadFile(ref2, dishImage, {
					contentType: 'images/jpg'
				});
				if (req)
				{
					const imageRef = ref(storage, storageName)
					const d = await getDownloadURL(imageRef);
					return d;
				}
			} catch (err)
			{
				toast.error(err.message || err.error.description)
			}
		}
		return null;
	}

	async function handleSubmit(e)
	{
		e.preventDefault();
		let tempMenu = { ...newMenu };
		tempMenu['slug'] = tempMenu['menu-name'].split(' ').join('-').toLowerCase()
		const imageUrl = dishImage ? await upload() : "";

		// Store the items array for this specific category
		const catMenu = tempMenu["menu-data"].filter((cat) => cat['category-title'] === dishCat);


		if (!uploading)
		{
			// Check if items in this category is not empty
			const dishInfo = {
				"item-description": dishDesc,
				"item-name": dishName,
				"item-price": dishPrice,
				"item-image": imageUrl ? imageUrl : "",
				"image-path": imageUrl ? `${ dishCat }/${ dishImage.name } ` : ""
			}

			if (catMenu.length > 0)
			{
				catMenu[0].items.push(dishInfo)
			} else
			{
				tempMenu['menu-data'].push(
					{
						'category-title': dishCat,
						'items': [dishInfo]
					})
			}

		}
		setNewMenu(tempMenu);
		setToggle(false)
	}

	async function handleEdit(e)
	{
		e.preventDefault();
		let tempMenu = { ...newMenu };
		/*
		* Get the index of the previous category the dish within the 
		* menu-data array.
		* 
		*/
		let prev = findCategoryIndex(tempMenu["menu-data"], prevCategory)

		/*
		* Get the index of the the dish within the array of that 
		* category
		 */

		const pos = findDishIndex(tempMenu["menu-data"][prev], props["item-name"])

		tempMenu["menu-data"][prev]['items'][pos] = {
			"item-description": dishDesc,
			"item-name": dishName,
			"item-price": dishPrice,
			"item-image": props["image-url"],
			"image-path": props["image-url"].length > 0 ? `${ dishCat }/${ dishImage.name } ` : ""
		}
		if (prevCategory !== dishCat)
		{
			/*
			* Remove that the dish from the array
			  */
			tempMenu["menu-data"][prev]['items'].splice(pos, 1);
			// Remove item from menu-data array if there's no items in it.
		}
		let findCatIndex = findCategoryIndex(tempMenu['menu-data'], dishCat)

		if (findCatIndex === - 1)
		{
			tempMenu["menu-data"].push({
				'category-title': dishCat,
				'items': [{
					"item-description": dishDesc,
					"item-name": dishName,
					"item-price": dishPrice,
					"item-image": props["image-url"]
				}]
			})
		} else
		{
			tempMenu["menu-data"][findCatIndex]["items"].push({
				"item-description": dishDesc,
				"item-name": dishName,
				"item-price": dishPrice,
				"item-image": props["image-url"]
			})
		}

		setNewMenu(tempMenu)
	}

	useEffect(() =>
	{
		if (type === "edit")
		{
			setDishName(props['item-name']);
			setDishDesc(props['item-description']);
			setDishPrice(Number(props['item-price']).toFixed(2))
		}
	}, [])


	return (
		<div className="fixed top-0 left-0 h-screen w-screen overflow-hidden bg-slate-900/70 flex items-center justify-center wrap z-50">
			<div className="w-[600px] h-auto bg-white p-6 rounded border shadow-lg relative">
				<div className='absolute right-6'>
					{uploading ? <div className='text-white flex font-bold'><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
						<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					</svg>
						<p className='text-xs text-slate-900'>Processing</p>
					</div> : <button className="text-xs flex items-center hover:text-primary-gray" onClick={() => setToggle(false)}> Close<AiOutlineCloseCircle className='w-5 h-5 ml-1' /></button>}

				</div>
				<form onSubmit={type === 'edit' ? handleEdit : handleSubmit}>
					<div className='flex items-center space-x-2'>
						<SushiIcon classname='mb-1' />
						<h1 className='font-bold'>Add a Dish</h1>
					</div>
					<div className="space-y-1 mt-5">
						<label htmlFor="dish-name" className="text-sm font-semibold">Dish Name * </label>
						<input type="text" id="dish-name" className="block w-full border p-2 rounded bg-[#F9F9F9] focus-within:outline-1 focus-within:outline-primary-gray" placeholder="Tacos, Sushi, Steak" disabled={uploading} value={dishName} onChange={(e) => setDishName(e.currentTarget.value)} required />
					</div>
					<div className="space-y-1 mt-5">
						<label htmlFor="dish-desc" className="text-sm font-semibold">Describe your dish <span className='text-xs text-gray-400 font-normal'>(optional)</span> </label>
						<textarea type="text" id="dish-desc" className="block w-full border p-2 rounded bg-[#F9F9F9] focus-within:outline-1 focus-within:outline-primary-gray" placeholder="Dish description" disabled={uploading} value={dishDesc} onChange={(e) => setDishDesc(e.currentTarget.value)} />
					</div>
					<div className='mt-5'>
						<div className='w-full'>
							<label htmlFor="dish-category" className='text-sm font-semibold'>Select Category *</label>
							<select className='block w-full bg-[#F9F9F9] p-2 mt-2 border rounded focus-within:outline-1 focus-within:outline-primary-gray' disabled={uploading} onClick={(e) => setDishCat(e.currentTarget.value)} defaultValue={dishCat} required>
								<option label='Pick a category' disabled>Pick a category</option>
								{currentCategories.map((category) =>
									<option key={category} value={category} label={category} id={category}>{category}</option>
								)}
							</select>
						</div>
					</div>
					<div className="mt-5 flex gap-4 flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap">
						<div className='w-full'>
							<label htmlFor="dish-price" className='text-sm font-semibold'>Price ($) *</label>
							<div className='flex items-center mr-2'><input type="number" step="any" className='block text-sm border w-full p-2 rounded mt-2 bg-primary-gray/10' id="dish-price" placeholder='0.00' value={dishPrice} disabled={uploading} onChange={(e) => setDishPrice(e.currentTarget.value)} required />
							</div>
						</div>
						<div className='w-full mt-1'>
							<h4 className='text-sm font-semibold'>Upload <span className='text-xs text-gray-400 font-normal'>(optional)</span></h4>
							<div className='border mt-2 rounded  flex items-center w-full'>
								<div className='items-center w-full ml-4 grow text-primary-gray'>
									<p className='text-sm font-medium'><AiOutlineLink className='w-4 h-4 inline mr-2' />{dishImage ? dishImage.name : "Choose a file"}</p>
								</div>
								<label htmlFor="dish-image" className='text-sm font-medium cursor-pointer  text-white'>
									<p className='w-auto bg-primary-blue px-6 py-2 rounded-tr rounded-br hover:bg-primary-blue/80'>Go </p>
								</label>
								<input type="file" className='hidden text-sm border w-full rounded mt-2 bg-primary-gray/10 file:bg-transparent file:border-0' id="dish-image" disabled={uploading} onChange={(e) =>
								{
									const file = e.target.files ? e.target.files[0] : undefined
									setDishImage(file)
								}} />
							</div>
						</div>
					</div>
					<div className=' flex mt-8'>
						<button className=' border rounded border-primary-blue px-6 py-2 text-sm font-bold text-primary-blue flex items-center hover:bg-primary-blue hover:text-white group transition-colors' type='submit' disabled={uploading}>
							<AiFillPlusCircle className='w-6 h-6 mr-2' />{type === "edit" ? "Update" : "Add Item"}
						</button>
						<button className='text-primary-gray hover:bg-primary-gray hover:text-white transition-colors font-medium border rounded px-6 py-2 ml-4' type='button' disabled={uploading} onClick={() => setToggle(false)}>Cancel</button>
					</div>
				</form>
			</div>
		</div>);
}

export default NewItemInput;