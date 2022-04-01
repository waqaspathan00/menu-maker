import { PlusCircleIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddItemInput from "../components/Inputs/AddItemInput";
import { useNavigate } from 'react-router-dom'
import Dishes from "../components/Dishes/Dishes";

function AddItems()
{
	const { data, step } = useSelector(state => state.newMenu)
	const [isOpen, setIsOpen] = useState(false);

	const navigate = useNavigate();

	useEffect(() =>
	{
		if (step === 1 && data['menu-data']['category-title'].length < 1)
		{
			navigate('/add-menu');
		}
	}, [data, navigate, step])

	return (
		<>
			<section className="max-w-[1137px]
		xl:mt-0
		lg:mt-0
		relative
		">

				<div className="xl:w-[50vw] lg:max-w-[50vw] w-[95vw] mx-auto p-4 mt-12 h-auto" >
					<div className="flex justify-between items-center flex-wrap">
						<h2 className="capitalize font-semibold">{data["menu-data"]["category-title"]}'s dishes</h2>
						<p className="text-xs">{data["menu-data"]["items"].length} items</p>
					</div>
					<div className="mt-8">
						{(data["menu-data"]["items"].length < 1) ? <p className="text-sm bg-gray-100 p-4 mt-24 text-center">Click or Press ‘Add New Dish’ to create a new dish</p> : ""}
						{data["menu-data"]["items"].map((dish, index) => <Dishes key={index} props={dish} />)}
					</div>
				</div>

				<div className="mt-8 w-full flex justify-between p-4 flex-wrap">
					<button className="text-sm font-bold border rounded px-4 py-2 border-primary-blue text-primary-blue flex items-center hover:bg-primary-blue hover:text-white group transition-colors" onClick={() => setIsOpen(true)}><PlusCircleIcon className="w-6 h-6 mr-2" />Add New Dish</button>
					<button className="text-sm font-bold">Submit</button>
				</div>
			</section>
			{isOpen ? <AddItemInput setIsOpen={setIsOpen} /> : ""}

		</>
	);
}

export default AddItems;