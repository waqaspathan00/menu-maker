import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
	name: 'newMenu',
	initialState: {
		data: {
			"menu-data": {
				"category-title": "",
				"items": [],
			},
			"menu-name": ""
		},
		step: 1,
	},
	reducers: {
		storeNewMenu: (state, action) =>
		{
			state.data["menu-name"] = action.payload;
			state.data["menu-data"]["category-title"] = action.payload
		},
		adjustStep: (state, action) => {
			state.step = action.payload;
		},
		storeMenuItems: (state, action) => {
			state.data["menu-data"]["items"].push(action.payload);
		}
	}
})

export const { storeNewMenu, adjustStep, storeMenuItems } = menuSlice.actions;
export default menuSlice.reducer