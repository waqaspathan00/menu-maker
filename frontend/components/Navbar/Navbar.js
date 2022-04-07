import UserNav from "/components/UserNav/UserNav";
import Logo from "/components/Logo/Logo";

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