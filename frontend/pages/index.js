import {loginWithGoogle, logoutWithGoogle} from "../lib/firebase";

export default function Home() {
    return (
        <div>
            <button onClick={loginWithGoogle}>Sign In</button>
            <button onClick={() => logoutWithGoogle()}>Sign Out</button>
            <h1>This will be the homepage</h1>
        </div>
    )
}
