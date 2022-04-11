import { logoutWithGoogle } from "../../lib/firebase"
const UserNav = ({ user }) =>
{
	return (
		<div className="w-auto space-x-2 h-10 flex justify-between items-center">
			<div className="w-10 h-10 rounded-full bg-center bg-cover border border-primary-blue" style={{ backgroundImage: `url(${ user?.photoURL })` }}>

			</div>
			{/*<button onClick={loginWithGoogle}>Sign In</button>*/}
			<button onClick={() => logoutWithGoogle()}>Sign Out</button>
			<div className="text-right">
				<h3>{user?.displayName}</h3>
				<p className="text-xs text-primary-gray">NY Kitchen</p>
			</div>
		</div>
	)
}

export default UserNav


