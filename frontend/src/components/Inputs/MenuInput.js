import { ReactComponent as PizzaIcon } from './../../assets/img/Pizza.svg'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adjustStep, storeNewMenu } from '../../redux/menuSlice';
import { useNavigate } from 'react-router-dom';
const MenuInput = () =>
{
	const [menuName, setMenuName] = useState("")
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleSubmit(e)
	{
		e.preventDefault();
		dispatch(storeNewMenu(menuName));
		dispatch(adjustStep(2))
		setMenuName("");
		navigate("/add-items")
	}

	return (
		<div className="mt-4 w-full p-4" data-testid="test-input">
			<div className="flex items-center space-x-2 font-medium">
			
				<PizzaIcon />
				<h4 className="text-sm">Add Menu</h4>
			</div>
			<form className="text-left mt-4" onSubmit={handleSubmit}>
				<label htmlFor="menu-name">Menu Name *</label>
				<input type="text" id="menu-name" className="block w-full bg-[#F9F9F9] h-11 border border-[#DADADA] rounded-sm mt-4 pl-4" placeholder="Lunch, dinner, etc." value={menuName} required onChange={(e) => setMenuName(e.currentTarget.value)} />

				<div className="flex justify-between items-center mt-8 ">
					<h4>Cancel</h4>
					<button className='flex items-center font-bold' type="submit">Next <svg className="w-4 h-4 text-primary-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
				</div>
			</form>
		</div>
	)
}

export default MenuInput