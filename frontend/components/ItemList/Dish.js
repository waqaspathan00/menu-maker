import { useContext, useState } from 'react'
import { MdOutlineDragIndicator } from 'react-icons/md'
import { NewMenuContext } from '../../lib/context';
import NewItemInput from '../Inputs/NewItemInput';
import { findCategoryIndex } from '/lib/utils'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

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
					<MdOutlineDragIndicator className='mr-4 hover:cursor-grab handle-sort' />
					<div className='w-full flex '>
						{props['item-image'] || props['item-image'].length ?
							<div className='w-36 h-24 mr-4'>
								<img src={props['item-image']} className="w-full h-full object-fill rounded-md mb-4" />
							</div> : null}
						<div className='relative w-full'>
							<div>
								<h1 className='leading-relaxed font-bold text-left text-lg'>{props['item-name']}</h1>
								<div className='space-x-2 flex pl-2 w-fit absolute right-0 top-2'>
									<button type='button' onClick={() => setEdit(true)}>
										<AiFillEdit className='hover:text-primary-gray cursor-pointer w-5 h-5' title="Edit Category title" />
									</button>
									<button type='button' title='Delete' onClick={removeDish}>
										<AiFillDelete className='text-primary-red hover:text-primary-red/50 w-5 h-5 cursor-pointer' />
									</button>
								</div>
							</div>

							<div>
								{props['item-description'].length > 0 ? <p className='text-sm leading-relaxed mb-0'>{props['item-description']}</p> : null}
								<p className='font-semibold mb-0'>$ {Number(props['item-price']).toFixed(2)}</p>
							</div>
						</div>

					</div>
				</div>
			</div>
			{isEdit ? <NewItemInput type='edit' props={props} setToggle={setEdit} prevCategory={category} /> : null}
		</>
	)
}




export default Dish