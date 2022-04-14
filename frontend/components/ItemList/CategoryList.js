import { useState } from 'react';
import { IoEllipsisVerticalSharp } from 'react-icons/io5'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
function CategoryList({ props, handleDelete, handleEdit, handleSetActive, loading, index })
{

	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const [isCategoryOpen, setIsCategoryOpen] = useState(true)

	return (
		<>

			<div className='flex items-center justify-between relative'>
				<div>
					<h1 className='text-lg font-bold mb-0'>{props["menu-name"]}</h1>
					{loading ? <div className="text-xs w-fit mt-2 flex items-center">
						Processing
						<svg className="animate-spin ml-2 h-5 w-5 text-primary-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
							<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>
					</div> : ""}
				</div>

				<div className='space-x-2'>
					<button onClick={() => setIsCategoryOpen(prev => !prev)}>
						{isCategoryOpen ? <AiFillCaretUp /> : <AiFillCaretDown />}

					</button>
					<button onClick={() => setIsOpenMenu(prev => !prev)}>
						<IoEllipsisVerticalSharp />
					</button>
				</div>
				{isOpenMenu ? <div className="flex flex-col w-24 p-2 top-8 bg-white absolute right-0 border rounded items-start space-y-2">
					<button className="font-semibold text-sm hover:font-bold" onClick={() => handleEdit(props)} disabled={loading}>Edit</button>
					<button className="font-semibold text-sm hover:font-bold" disabled={loading}>View</button>
					<button className="font-semibold text-primary-red text-sm hover:font-bold" disabled={loading} onClick={(e) => handleDelete(e, props, index)}>Delete</button>
					<button className="font-semibold text-sm hover:font-bold text-primary-blue" disabled={loading} onClick={(e) => handleSetActive(e, props["url_name"], false)}>Set active</button>
				</div> : null}

			</div>
			{isCategoryOpen ? <ul className="flex text-sm items-center mt-4">
				{props["menu-data"].map((category, index) =>
					<li key={index}>
						<h4 className='text-base mb-0'>{category['category-title']}</h4>
					</li>
				)}
			</ul> : null}

		</>
	)
}

export default CategoryList;