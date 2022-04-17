/* React JS Template using functions */
import { createContext, useMemo, useState } from "react"

// when user logs in their information will be saved in this context
export const UserContext = createContext({ user: null })


export const NewMenuContext = createContext({})

export const NewMenuProvider = ({ children }) =>
{
	const [step, setStep] = useState(0);
	const [newMenu, setNewMenu] = useState({
		"menu-data": [],
		"menu-name": "",
		"isActive": false
	});
	const [currentCategories, setNewCategories] = useState(["Main (default)"])

	return <NewMenuContext.Provider value={{ step, setStep, newMenu, setNewMenu, currentCategories, setNewCategories }}>{children}</NewMenuContext.Provider>
}

export const MenusContext = createContext({});
export const MenusProvider = ({ children }) =>
{
	const [userMenus, setUserMenu] = useState(null);
	const [busName, setBusName] = useState('')
	const values = useMemo(() => ({userMenus, setUserMenu, busName, setBusName}), [userMenus, setUserMenu, busName, setBusName])

	return <MenusContext.Provider value={values}>
		{children}
	</MenusContext.Provider>
}