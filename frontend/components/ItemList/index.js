import { useContext, useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai'
import Dish from './Dish';
import { ReactSortable } from "react-sortablejs";
import { NewMenuContext } from '../../lib/context';

/*
* props @type {object} - holds single category and its items
* index @type {Number} - holds the index of the current categories inside 
* 						 menu-data array.
*/

function ItemList({ props, index })
{
	const [isOpen, setIsOpen] = useState(true);
	const [state, setState] = useState(props.items);
	const [isEdit, setEdit] = useState(false);
	const { newMenu, setNewMenu } = useContext(NewMenuContext);

	const sortable = (menu) =>
	{
		let temp = { ...newMenu };
		temp['menu-data'][index]['items'] = menu
		setNewMenu(temp)
		// return (menu)
	}

	useEffect(() =>
	{
		sortable(state)
	}, [state])

	return (

		<div className="w-auto h-auto p-4 border rounded">
			<button className='flex items-center justify-between w-full' onClick={() => setIsOpen(prev => !prev)}>
				<h1 className="font-bold text-lg">{props['category-title']}</h1>
				<AiFillCaretDown className="w-6" />
			</button>
			<div className='space-y-4'>
				{isOpen ? <ReactSortable list={state} setList={setState} animation={300} disabled={!isEdit ? false : true} >
					{state.map((item, index) => <Dish key={index} props={item} category={props['category-title']} isEdit={isEdit} setEdit={setEdit} />)}
				</ReactSortable> : null}
			</div>
		</div>
	);
}

export default ItemList;