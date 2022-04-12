import { useContext, useEffect } from "react"
import { UserContext } from "../lib/context"
import { useRouter } from 'next/router'
const ProtectedRoute = ({ children }) =>
{
	const { userData } = useContext(UserContext);
	const router = useRouter();

	useEffect(() =>
	{
		if (!userData.user && !userData.loading)
		{
			router.push("/")
		}
	}, [router, userData.user, userData.loading])

	return <>{userData.user ? children : null}</>
}

export default ProtectedRoute;