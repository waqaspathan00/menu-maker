import { useContext, useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Dish from './Dish';
import { ReactSortable } from "react-sortablejs";
import { NewMenuContext } from '../../lib/context';
import NewCategory from '../Inputs/NewCategory';
import { toast } from 'react-toastify';

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
	const { newMenu, setNewMenu, currentCategories, setNewCategories } = useContext(NewMenuContext);
	const [categoryOpen, setIsCategoryOpen] = useState(false)
	const [showWarning, setShowWarning] = useState(false)

	function sortable(menu)
	{
		let temp = { ...newMenu };
		temp['menu-data'][index]['items'] = menu



		setNewMenu(temp)
		// return (menu)
	}

	function handleDelete()
	{
		let temp = { ...newMenu };
		const deletedCategory = temp["menu-data"].splice(index, 1);
		setNewMenu(temp);
		setShowWarning(false);
		let indexOfDeletedCategory = currentCategories.indexOf(deletedCategory[0]["category-title"])

		// Don't delete default category
		if (indexOfDeletedCategory !== -1 && indexOfDeletedCategory !== 0)
		{
			currentCategories.splice(indexOfDeletedCategory, 1);
		}

		toast.success(`${ deletedCategory[0]["category-title"] } successfully deleted`)
	}


	useEffect(() =>
	{
		sortable(state)
	}, [state])

	return (

		<div className="w-auto h-auto p-4 border rounded">
			{showWarning ? <ShowWarning category={props["category-title"]} setIsOpen={setShowWarning} removeCategory={handleDelete} /> : ""}
			<div className='flex items-center'>
				<button className='flex items-center justify-between w-full' onClick={() => setIsOpen(prev => !prev)}>
					<h1 className="font-bold text-lg">{props['category-title']}</h1>
					<div className='flex items-center'>
						<AiFillCaretDown className="w-6" />
					</div>
				</button>
				<div className='space-x-2 flex border-l pl-2 border-l-primary-gray relative'>
					{/* <span className='flex items-center text-xs cursor-pointer hover:text-slate-500 transition-colors' title='Options'><BsThreeDotsVertical className='w-4 h-4' /></span> */}
					<div className='space-x-2 text-xs whitespace-nowrap'>
						<button onClick={() => setIsCategoryOpen(true)}>Edit</button>
						<button onClick={() => setShowWarning(true)}>Delete</button>
					</div>
				</div>
			</div>
			<div className='space-y-4'>
				{isOpen ? <ReactSortable list={state} setList={setState} animation={300} disabled={!isEdit ? false : true} >
					{state.map((item, index) => <Dish key={index} props={item} category={props['category-title']} isEdit={isEdit} setEdit={setEdit} index={index} />)}
				</ReactSortable> : null}
			</div>
			{categoryOpen && <NewCategory type='edit' setIsOpen={setIsCategoryOpen} prevCategory={props['category-title']} />}
		</div>
	);
}
function ShowWarning({ category, removeCategory, setIsOpen })
{
	return <div className='fixed top-0 left-0 h-screen w-screen overflow-hidden bg-slate-900/70 flex items-center justify-center wrap z-50'>
		<div className="w-96 border p-4 rounded shadow-xl bg-white">
			<h1>
				<strong>All items in {category} will be deleted.</strong> Are you sure you want to delete this category?
			</h1>
			<div className='pt-2 w-full space-x-4 text-sm mt-4'>
				<button className='text-primary-red font-semibold' onClick={removeCategory}>Yes, I'm sure.</button>
				<button onClick={() => setIsOpen(false)}>Cancel</button>
			</div>
		</div>
	</div>
}

export default ItemList;