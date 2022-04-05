import UserNav from "/UserNav/UserNav";
import Logo from "/Logo/Logo";

const Navbar = () =>
{
  return (
    <header className="w-screen shadow-sm h-auto">
      <nav className="flex items-center justify-between container mx-auto h-[75px] p-4">
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