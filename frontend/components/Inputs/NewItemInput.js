import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AiOutlineLink, AiFillPlusCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import { toast } from 'react-toastify';
import { NewMenuContext } from '../../lib/context';
import SushiIcon from '../SVG/SushiIcon';

function NewItemInput({ categories, setToggle })
{
	const [dishName, setDishName] = useState("");
	const [dishDesc, setDishDesc] = useState("");
	const [dishCat, setDishCat] = useState(categories[0]);
	const [dishPrice, setDishPrice] = useState("");
	const { newMenu, setNewMenu } = useContext(NewMenuContext);


	function handleSubmit(e)
	{
		e.preventDefault();
		let tempMenu = { ...newMenu };
		tempMenu['slug'] = tempMenu['menu-name'].split(' ').join('-').toLowerCase()
		const catMenu = newMenu["menu-data"].filter((cat) => cat['category-title'] === dishCat);
		if (catMenu.length > 0)
		{
			catMenu[0].items.push({ "item-description": dishDesc, "item-name": dishName, "item-price": dishPrice })
		} else
		{
			tempMenu['menu-data'].push({ 'category-title': dishCat, 'items': [{ "item-description": dishDesc, "item-name": dishName, "item-price": dishPrice }] })
		}
		setNewMenu(tempMenu);
		setToggle(false)
	}


	return (
		<div className="fixed top-0 left-0 h-screen w-screen overflow-hidden bg-slate-900/70 flex items-center justify-center wrap">
			<div className="w-[600px] h-auto bg-white p-6 rounded border shadow-lg relative">
				<div className='absolute right-6'>
					<button className="text-xs flex items-center hover:text-primary-gray" onClick={() => setToggle(false)}> Close<AiOutlineCloseCircle className='w-5 h-5 ml-1' /></button>
				</div>
				<form onSubmit={handleSubmit}>
					<div className='flex items-center space-x-2'>
						<SushiIcon classname='mb-1' />
						<h1 className='font-bold'>Add a Dish</h1>
					</div>
					<div className="space-y-1 mt-5">
						<label htmlFor="dish-name" className="text-sm font-semibold">Dish Name * </label>
						<input type="text" id="dish-name" className="block w-full border p-2 rounded bg-[#F9F9F9] focus-within:outline-1 focus-within:outline-primary-gray" placeholder="Tacos, Sushi, Steak" value={dishName} onChange={(e) => setDishName(e.currentTarget.value)} required />
					</div>
					<div className="space-y-1 mt-5">
						<label htmlFor="dish-desc" className="text-sm font-semibold">Describe your dish * </label>
						<textarea type="text" id="dish-desc" className="block w-full border p-2 rounded bg-[#F9F9F9] focus-within:outline-1 focus-within:outline-primary-gray" placeholder="Dish description" value={dishDesc} onChange={(e) => setDishDesc(e.currentTarget.value)} required />
					</div>
					<div className='mt-5'>
						<div className='w-full'>
							<label htmlFor="dish-category" className='text-sm font-semibold'>Select Category *</label>
							<select className='block w-full bg-[#F9F9F9] p-2 mt-2 border rounded focus-within:outline-1 focus-within:outline-primary-gray' onClick={(e) => setDishCat(e.currentTarget.value)} required>
								<option label='Pick a category' disabled>Pick a category</option>
								{categories.map((category) =>
									<option key={category} value={category} label={category} id={category}>{category}</option>
								)}
							</select>
						</div>
					</div>
					<div className="mt-5 flex gap-4 flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap">
						<div className='w-full'>
							<label htmlFor="dish-price" className='text-sm font-semibold'>Price ($) *</label>
							<div className='flex items-center mr-2'><input type="number" step="any" className='block text-sm border w-full p-2 rounded mt-2 bg-primary-gray/10' id="dish-price" placeholder='0.00' value={dishPrice} onChange={(e) => setDishPrice(e.currentTarget.value)} required />
							</div>
						</div>
						<div className='w-full mt-1'>
							<h4 className='text-sm font-semibold'>Upload <span className='text-xs text-primary-gray/70'>(optional)</span></h4>
							<div className='border mt-2 rounded  flex items-center w-full'>
								<div className='items-center w-full ml-4 grow text-primary-gray'>
									<p className='text-sm font-medium'><AiOutlineLink className='w-4 h-4 inline mr-2' />Choose File</p>
								</div>
								<label htmlFor="dish-image" className='text-sm font-medium cursor-pointer  text-white'>
									<p className='w-auto bg-primary-blue px-6 py-2 rounded-tr rounded-br hover:bg-primary-blue/80'>Go </p>
								</label>
								<input type="image" className='hidden text-sm border w-full rounded mt-2 bg-primary-gray/10 file:bg-transparent file:border-0' id="dish-image" />
							</div>
						</div>
					</div>
					<div className=' flex mt-8'>
						<button className=' border rounded border-primary-blue px-6 py-2 text-sm font-bold text-primary-blue flex items-center hover:bg-primary-blue hover:text-white group transition-colors' type='submit'>
							<AiFillPlusCircle className='w-6 h-6 mr-2' />Add Item
						</button>
						<button className='text-primary-gray hover:bg-primary-gray hover:text-white transition-colors font-medium border rounded px-6 py-2 ml-4' type='button' onClick={() => setToggle(false)}>Cancel</button>
					</div>
				</form>
			</div>
		</div>);
}

export default NewItemInput;