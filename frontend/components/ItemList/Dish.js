import { useContext, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineDragIndicator } from 'react-icons/md'
import { NewMenuContext } from '../../lib/context';
import NewItemInput from '../Inputs/NewItemInput';
import { findCategoryIndex } from '/lib/utils'
import { AiFillCaretDown, AiFillEdit, AiFillDelete } from 'react-icons/ai'

/**
 * @param  {Object} props - Dish information
 * @param  {String} category - Dish's category
 * @param  {Boolean} isEdit 
 * @param  {Function} setEdit
 * @param  {Number} index - Index of this dish in the newMenu object
 */
function Dish({ props, category, isEdit, setEdit, index })
{
	const [isOpen, setIsOpen] = useState(false);
	const { newMenu, setNewMenu } = useContext(NewMenuContext);
	function removeDish()
	{
		let tempMenu = { ...newMenu };
		let catIndex = findCategoryIndex(tempMenu["menu-data"], category)

		if (catIndex !== -1)
		{
			tempMenu["menu-data"][catIndex]["items"].splice(index, 1);

			if (tempMenu["menu-data"][catIndex]["items"].length === 0)
			{
				tempMenu["menu-data"].splice(catIndex, 1);
			}
		}
		setNewMenu(tempMenu);
	}

	return (
		<>
			<div className='mt-4 w-auto border rounded shadow-lg p-4'>
				<div className='flex items-center'>
					<MdOutlineDragIndicator className='mr-4 hover:cursor-grab' />
					<div className='w-full pl-4 relative'>
						<button className='w-full flex justify-between items-center relative cursor-pointer' >
							<h1 className='leading-relaxed font-semibold hover:text-gray-500 text-left'>{props['item-name']}</h1>
							<div className='space-x-2 flex pl-2 w-fit'>
								<AiFillEdit className='hover:text-primary-gray cursor-pointer' title="Edit Category title" onClick={() => setEdit(true)} />
								<AiFillDelete className='text-primary-red hover:text-primary-red/50 cursor-pointer' title='Delete' onClick={removeDish} />
							</div>
						</button>
			

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