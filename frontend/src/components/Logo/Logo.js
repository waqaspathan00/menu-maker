import {Link} from 'react-router-dom'
const Logo = () => {
  return (
	<Link to="/" className=' font-logo' data-testid="nav-logo">Menu Maker</Link>
  )
}

export default Logo