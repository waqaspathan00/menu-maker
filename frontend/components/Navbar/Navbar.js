import UserNav from "/components/UserNav/UserNav";
import Logo from "/components/Logo/Logo";
import { useUserData } from "../../lib/hooks";
import { useContext, useEffect, useState } from "react";
import { loginWithGoogle } from "../../lib/firebase";
import { UserContext } from "../../lib/context";
const Navbar = () =>
{
  const [currentUser, setCurrentUser] = useState(null);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    setCurrentUser(userData);
  },[userData])

  return (
    <header className="w-screen shadow-sm h-auto">
      <nav className="flex items-center justify-between container mx-auto h-[75px] p-4">
        <div>
          <Logo />
        </div>
        <div>
          {currentUser?.user ? <UserNav user={currentUser.user} /> : <button onClick={loginWithGoogle}>Login in</button>}
        </div>
      </nav>
    </header>
  )
}

export default Navbar