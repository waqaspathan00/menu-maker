import UserNav from "/components/UserNav/UserNav";
import Logo from "/components/Logo/Logo";
import { useContext, useEffect } from "react";
import { loginWithGoogle } from "../../lib/firebase";
import { UserContext } from "../../lib/context";
const NavigationBar = () =>
{
  const { userData } = useContext(UserContext);

  return (
    <header className="w-screen shadow-sm h-auto">
      <nav className="flex items-center justify-between container mx-auto h-[75px] p-4">
        <div>
          <Logo />
        </div>
        <div>
          {userData.user ? <UserNav user={userData.user} /> : <button onClick={loginWithGoogle}>Login in</button>}
        </div>
      </nav>
    </header>
  )
}

export default NavigationBar