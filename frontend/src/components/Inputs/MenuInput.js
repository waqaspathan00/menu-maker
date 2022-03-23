import { ReactComponent as PizzaIcon } from './../../assets/img/Pizza.svg'
const MenuInput = () =>
{
	return (
		<div className="mt-4 w-full p-4">
			<div className="flex items-center space-x-2 font-medium">
				<PizzaIcon />
				<h4 className="text-sm">Add Menu</h4>
			</div>
			<form className="text-left mt-4">
				<label htmlFor="menu-name">Menu Name *</label>
				<input type="text" id="menu-name" className="block w-full bg-[#F9F9F9] h-11 border border-[#DADADA] rounded-sm mt-4 pl-4" placeholder="Lunch, dinner, etc." required />
			</form>
			<div className="flex justify-between items-center mt-8 ">
				<h4>Cancel</h4>
				<h4 className='flex items-center font-bold'>Next <svg className="w-4 h-4 text-primary-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></h4>
			</div>
		</div>
	)
}

export default MenuInput