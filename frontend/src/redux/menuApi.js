import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const menuApi = createApi({
	reducerPath: "menuApi",
	baseQuery: fetchBaseQuery({baseUrl:  "http://localhost:8000"}),
	endpoints: (builder) => ({
		getMenu: builder.query({
			query: (menuName) => `/view/${menuName}`
		})
	})
})

export const {useGetMenuQuery} = menuApi;