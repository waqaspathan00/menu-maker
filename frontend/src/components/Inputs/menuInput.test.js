import {render, screen } from '@testing-library/react';
import MenuInput from './MenuInput';

test('Should render Menu Input', () => {
	render(<MenuInput/>);
	const menuInputEle = screen.getByTestId('test-input');
	expect(menuInputEle).toBeInTheDocument();
})