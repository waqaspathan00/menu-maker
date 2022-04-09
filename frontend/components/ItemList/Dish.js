import { useContext, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineDragIndicator } from 'react-icons/md'
import { NewMenuContext } from '../../lib/context';
import NewItemInput from '../Inputs/NewItemInput';

/*
* props @type {object} - holds single dish information
* category @type {String} - current category which this dish is in
* isEdit @type {boolean}
* setEdit @type {function}
*/

function Dish({ props, category, isEdit, setEdit, index })
{
	const [isOpen, setIsOpen] = useState(false);
	const { newMenu, setNewMenu } = useContext(NewMenuContext);
	function removeDish()
	{
		let tempMenu = { ...newMenu };
		let catIndex = tempMenu["menu-data"].findIndex((item) => item['category-title'] === category);

		if (catIndex !== -1)
		{
			tempMenu["menu-data"][catIndex]["items"].splice(index, 1);
			setNewMenu(tempMenu)
		}
	}

	return (
		<>
			<div className='mt-4 w-auto border rounded shadow-lg p-4'>
				<div className='flex items-center'>
					<MdOutlineDragIndicator className='mr-4 hover:cursor-grab' />
					<div className='w-full border-l pl-4 relative'>
						<button className='w-full flex justify-between items-center relative hover:text-gray-500 cursor-pointer' onClick={() => setIsOpen(prev => !prev)}>
							<h1 className='leading-relaxed font-semibold'>{props['item-name']}</h1>
							<span className='flex items-center text-xs'>options<BsThreeDotsVertical className='w-4 h-4' /></span>
						</button>
						{isOpen ? <div className='absolute right-0 top-6 w-24 px-4 py-2 border rounded bg-white z-10'>
							<ul className='text-left space-y-1'>
								<li><button className='cursor-pointer hover:text-gray-400' onClick={() => { setEdit(true); setIsOpen(false) }}>edit</button>
								</li>
								<li className='text-red-500 hover:text-red-700 cursor-pointer' onClick={removeDish}>remove</li>
							</ul>
						</div> : null}

						<div className=''>
							{props['item-description'].length > 0 ? <p className='text-sm leading-relaxed'>{props['item-description']}</p> : null}
							<p className='font-bold'>$ {Number(props['item-price']).toFixed(2)}</p>
						</div>
						<div>
							<img src={props['item-image']} />
						</div>
					</div>
				</div>
			</div>
			{isEdit ? <NewItemInput type='edit' props={props} setToggle={setEdit} prevCategory={category} /> : null}
		</>
	)
}




export default Dish