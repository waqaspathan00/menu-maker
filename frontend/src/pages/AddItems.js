import { PlusCircleIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddItemInput from "../components/Inputs/AddItemInput";
import { useNavigate } from 'react-router-dom'

function AddItems()
{
	const {data, step} = useSelector(state => state.newMenu)
	const [isOpen, setIsOpen] = useState(false);

	const navigate = useNavigate();

	useEffect(() =>
	{
		if (step === 1)
		{
			navigate('/add-menu')
		}
	}, [data, navigate, step])

	return (
		<>
			<section className="max-w-[1137px] mx-auto
		xl:mt-0
		lg:mt-0
		mt-12
		h-[calc(100vh-275px)]
		relative
		">
			{console.log(data)}
				<div className="xl:w-[60vw] lg:max-w-[60vw] w-[95vw]">
					<div className="flex justify-between items-center">
						<h2 className="capitalize font-medium">{data["menu-data"]["category-title"]}'s dishes</h2>
						<p className="text-xs">{data["menu-data"]["items"].length} items</p>
					</div>
					{/* {menu['menu-data'][0]['items'] === undefined ? <p className="text-sm  p-4 mt-24 text-center">No items added</p> : menu['menu-data'][0]['items'].length} */}
				</div>
				<div className="absolute bottom-0 w-full flex justify-between">
					<button className="text-sm font-bold border rounded px-4 py-2 border-primary-blue text-primary-blue flex items-center hover:bg-primary-blue hover:text-white group transition-colors" onClick={() => setIsOpen(true)}><PlusCircleIcon className="w-6 h-6 mr-2" />Add New Dish</button>
					<button className="text-sm font-bold">Submit</button>
				</div>
			</section>
			{isOpen ? <AddItemInput setIsOpen={setIsOpen} /> : ""}
		</>
	);
}

export default AddItems;