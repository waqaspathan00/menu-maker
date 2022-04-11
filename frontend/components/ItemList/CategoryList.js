import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { NewMenuContext, MenusContext } from "../../lib/context";


function CategoryList({ props })
{
	return (
		<>
			<h1 className='text-xl font-bold'>{props["menu-name"]}</h1>
			<ul className="flex text-sm space-x-4">
				{props["menu-data"].map((category, index) =>
					<li key={index}>
						<h4>{category['category-title']}</h4>
					</li>
				)}
			</ul>
		
		</>
	)
}

export default CategoryList;