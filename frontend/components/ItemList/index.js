import { useContext, useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai'
import Dish from './Dish';
import { ReactSortable } from "react-sortablejs";
import { NewMenuContext } from '../../lib/context';
function ItemList({ props, index })
{
	const [isOpen, setIsOpen] = useState(false);
	const [state, setState] = useState(props.items);
	const { newMenu, setNewMenu} = useContext(NewMenuContext);

	function sortable() {
		let temp = { ...newMenu };
		temp['menu-data'][index].items = state;
	}

	useEffect(() =>
	{
		setState(props.items);
		sortable();

	}, [newMenu])

	return (

		<div className="w-auto h-auto p-4 border rounded">
			<button className='flex items-center justify-between w-full' onClick={() => setIsOpen(prev => !prev)}>
				<h1 className="font-bold text-lg">{props['category-title']}</h1>
				<AiFillCaretDown className="w-6" />
			</button>
			<div className='space-y-4'>
				{isOpen ? <ReactSortable list={state} setList={setState} setData={props.items} animation={300}>
					{state.map((item, index) => <Dish key={index} props={item} />)}
				</ReactSortable> : null}
				{console.log(newMenu)}
			</div>

		</div>
	);
}

export default ItemList;