function Dishes({ props })
{

	return (
		<div className="w-full h-auto p-4">
			<h4 className="text-xl font-semibold">{props['item-name']}</h4>
			<p className="text-sm">{props['item-description']}</p>
			<div className="flex justify-between items-center pt-10">
				<p className="font-medium">$ {props['item-price']}</p>
		
					<ul className="flex space-x-2 text-sm">
						<li>Edit</li>
						<li className="text-primary-red">Remove</li>
					</ul>
		
			</div>

		</div>)
}
export default Dishes;