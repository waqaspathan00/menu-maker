import { useState } from "react";
import { IoIosTime } from 'react-icons/io'
function Toggle()
{

	const [isChecked, setIsChecked] = useState(false)

	return (<div className="relative w-fit mt-12 ">
		<button onClick={() => setIsChecked(prev => !prev)} className="absolute z-50 w-10 h-10 bottom-2 right-0 " type="button">
		</button>
		<div className="w-fit">
			<h4 className="text-sm font-semibold mt-2 flex items-center gap-1 "> <IoIosTime className="w-5 h-5" />Availability: </h4>
			<div>
				<div className="flex items-center">
					<h4 className="text-sm ml-5">Accepting Orders:</h4>
					<div className="ml-5 ">
						<label htmlFor="unchecked" className="mt-3 inline-flex items-center cursor-pointer">
							<span className="relative">
								<span className="block w-10 h-6 bg-[#E9E9EA] rounded-full shadow-inner"></span>
								<span className={`absolute block w-4 h-4 mt-1 ml-1  rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out ${ isChecked ? 'bg-primary-blue transform translate-x-full' : "bg-white" }`}>
									<input id="unchecked" type="checkbox" className="absolute opacity-0 w-0 h-0" />
								</span>
							</span>
						</label>
					</div>
				</div>
			
			</div>
		</div>
	</div>)
}

export default Toggle;