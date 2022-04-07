
const UserNav = ({ user }) =>
{
	const { photoURL, displayName } = user;
	return (
		<div className="w-auto space-x-2 h-10 flex justify-between items-center">
			<div className="w-10 h-10 rounded-full bg-center bg-cover border border-primary-blue" style={{ backgroundImage: `url(${ photoURL })` }}>

			</div>
			<div className="text-right">
				<h3>{displayName}</h3>
				<p className="text-xs text-primary-gray">NY Kitchen</p>
			</div>
		</div>
	)
}

export default UserNav