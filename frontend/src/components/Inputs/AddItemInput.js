import { LinkIcon } from '@heroicons/react/outline'
import { PlusCircleIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'
import { ReactComponent as SushiIcon } from './../../assets/img/Sushi.svg'
import { useState } from 'react'
import { storeMenuItems } from '../../redux/menuSlice'
function AddItemInput({ setIsOpen })
{
	const [dishName, setDishName] = useState("");
	const [dishDesc, setDishDesc] = useState("");
	const [dishPrice, setDishPrice] = useState(0.00);
	const [dishImage, setDishImage] = useState("")
	const dispatch = useDispatch();

	function resetInputs()
	{
		setDishName('');
		setDishDesc('');
		setDishPrice('');
		setDishImage('');
	}

	function handleSubmit(e)
	{
		e.preventDefault();
		let items = { "item-price": dishPrice, "item-name": dishName, "item-description": dishDesc }
		dispatch(storeMenuItems(items));
		resetInputs();
		setIsOpen(false);
	}

	return <div className="absolute w-screen h-screen top-0 left-0 bg-gray-900/20 z-10 grid place-items-center">
		<div className="xl:w-[688px] lg:w-[688px] md:w-[95vw] w-[95vw] h-auto bg-white p-4 border border-primary-gray/50 rounded shadow-md relative">
			<div className='xl:w-[640px] lg:w-[640px] md:w-[640px] w-full p-4 mx-auto'>
				<button className='flex items-center text-sm underline' onClick={() => setIsOpen(false)}> Back
				</button>
				<div className='mt-8 flex items-center'>
					<SushiIcon className="mr-2" />
					<h2 className='text-sm font-medium text-primary-black'>
						Add a Dish</h2>
				</div>
				<form onSubmit={handleSubmit}>
					<div className='mt-8'>
						<label htmlFor="dish-name" className='text-sm font-medium'>Dish Name *</label>
						<input type="text" className='block text-sm border w-full p-2 rounded mt-2 bg-primary-gray/10 ' id="dish-name" placeholder='Tacos, Sushi, Steam' value={dishName} onChange={(e) => setDishName(e.currentTarget.value)} required />
					</div>
					<div className='mt-8'>
						<label htmlFor="dish-desc" className='text-sm font-medium'>Describe your dish *</label>
						<textarea type="text" className='block text-sm border w-full p-2 rounded mt-2 bg-primary-gray/10 resize-none h-[120px]' id="dish-desc" placeholder='Enter Description' value={dishDesc} onChange={(e) => setDishDesc(e.currentTarget.value)} required />
					</div>
					<div className='mt-8 w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4'>
						<div className='w-full'>
							<label htmlFor="dish-price" className='text-sm font-medium'>Price ($) *</label>
							<div className='flex items-center mr-2'><input type="number" min="0" step="any" className='block text-sm border w-full p-2 rounded mt-2 bg-primary-gray/10' id="dish-price" placeholder='0.00' value={dishPrice} onChange={(e) => setDishPrice(e.currentTarget.value)} required />
							</div>
						</div>
						<div className='w-full'>
							<h4 className='text-sm font-medium'>Upload <span className='text-xs text-primary-gray/70'>(optional)</span></h4>
							<div className='border mt-3 rounded  flex items-center w-full'>
								<div className='items-center w-full ml-4 grow text-primary-gray'>
									<p className='text-sm font-medium'><LinkIcon className='w-4 h-4 inline mr-2' />Choose File</p>
								</div>
								<label htmlFor="dish-image" className='text-sm font-medium cursor-pointer  text-white'>
									<p className='w-auto bg-primary-blue px-6 py-2 rounded-tr rounded-br'>Go </p>
								</label>
								<input type="file" className='hidden text-sm border w-full rounded mt-2 bg-primary-gray/10 file:bg-transparent file:border-0' id="dish-image" value={dishImage} onChange={(e) => setDishImage(e.currentTarget.value)} />
							</div>
						</div>
					</div>
					<div className=' flex space-x-8 mt-8'>
						<button className=' border rounded border-primary-blue px-6 py-2 text-sm font-bold text-primary-blue flex items-center hover:bg-primary-blue hover:text-white group transition-colors' type='submit'>
							<PlusCircleIcon className='w-6 h-6 mr-2' />Add Item
						</button>
						<button className='text-primary-gray font-medium' onClick={() => setIsOpen(false)}>Cancel</button>
					</div>
				</form>

			</div>

		</div>
	</div>
}
export default AddItemInput;