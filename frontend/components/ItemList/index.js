import {  useContext, useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai'
import Dish from './Dish';
import { ReactSortable } from "react-sortablejs";
import { NewMenuContext } from '../../lib/context';
function ItemList({ props, index })
{
	const [isOpen, setIsOpen] = useState(false);
	const [state, setState] = useState(props.items);
	const { newMenu, setNewMenu} = useContext(NewMenuContext);

	const sortable = (menu) => {
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
				{isOpen ? <ReactSortable list={state}  setList={setState} animation={300}>
					{state.map((item, index) => <Dish key={index} props={item} />)}
				</ReactSortable> : null}
			</div>

		</div>
	);
}

export default ItemList;