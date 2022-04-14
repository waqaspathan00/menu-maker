import { useState } from "react";
import Toggle from "../Inputs/Toggle";

function RestaurantInfo()
{
	const [restaurantName, setRestaurantName] = useState("Restaurant Name");
	const [restaurantAddress, setRestaurantAddress] = useState("124 Saint Andrews Ln Glen Cove, New York, 11542")


	return <div className="mb-12 gap-4 xl:w-1/4 lg:w-1/4 w-full">
		<div>
			<h1 className='text-2xl font-bold leading-relaxed'>{restaurantName}</h1>
			<p className='text-sm text-primary-gray'>{restaurantAddress}</p>
			<div className="mt-2">
				<button className="text-sm">Edit Info</button>
			</div>
		</div>
		<Toggle />
	</div>
}

export default RestaurantInfo;