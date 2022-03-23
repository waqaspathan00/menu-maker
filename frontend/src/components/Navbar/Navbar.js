import Logo from "../Logo/Logo"
import UserNav from "../UserNav/UserNav"

const Navbar = () =>
{
  return (
    <header className="w-full shadow-sm h-auto">
      <nav className="flex items-center justify-between container mx-auto h-[75px] 2xl:px-0 xl:px-0 lg:px-0 px-2">
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