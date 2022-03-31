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

/* 
 * Building new queries
 * queryName: builder.query({...})
 * To export, use the queryName and prepend it with `use` + QueryName  
 * (capitalize every word)
 * e.g getName -> useGetName
*/


export const {useGetMenuQuery} = menuApi;