import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	"menu-data": [],
	"menu-name": ""
}

export const menuSlice = createSlice({
	name: 'newMenu',
	initialState: {
		data: initialState,
		step: 1,
	},
	reducers: {
		storeNewMenu: (state, action) =>
		{
			state.data = {...action.payload};
		},
		adjustStep: (state, action) => {
			state.step = action.payload;
		}
	}
})

export const { storeNewMenu, adjustStep } = menuSlice.actions;
export default menuSlice.reducer