import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	"menu-data": [],
	"menu-name": ""
}

export const menuSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		storeNewMenu: (state, action) =>
		{
			state.data = [...action.payload];
		}
	}
})

export const { storeNewMenu } = menuSlice.actions;
export default menuSlice.reducer