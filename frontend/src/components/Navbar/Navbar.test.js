import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import {BrowserRouter} from 'react-router-dom'

// Checks if two components within Navbar component renders out
test("Renders Navigation bar", () => {
	render(<BrowserRouter><Navbar /></BrowserRouter>);
	
	const LogoComp = screen.getByTestId('nav-logo');
	const UserNav = screen.getByTestId('nav-userNav');

	expect(LogoComp).toBeInTheDocument();
	expect(UserNav).toBeInTheDocument();
})