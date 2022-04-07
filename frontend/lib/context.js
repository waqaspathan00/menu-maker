/* React JS Template using functions */
import { createContext, useState } from "react"

// when user logs in their information will be saved in this context
export const UserContext = createContext({ user: null })


export const NewMenuContext = createContext({})

export const NewMenuProvider = ({ children }) =>
{
	const [step, setStep] = useState(0);
	const [newMenu, setNewMenu] = useState({
		"menu-data": [],
		"menu-name": ""
	});

	return <NewMenuContext.Provider value={{ step, setStep, newMenu, setNewMenu }}>{children}</NewMenuContext.Provider>
}