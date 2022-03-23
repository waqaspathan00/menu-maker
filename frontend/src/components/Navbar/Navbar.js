import Logo from "../Logo/Logo"
import UserNav from "../UserNav/UserNav"

const Navbar = () =>
{
  return (
    <header className="w-full shadow-sm h-[75px]">
      <nav className="flex items-center justify-between container mx-auto h-full">
        <div>
          <Logo />
        </div>
        <div>
          <UserNav />
        </div>
      </nav>
    </header>
  )
}

export default Navbar