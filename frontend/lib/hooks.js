import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from "./firebase";

export function useUserData(){
    const [user, loading] = useAuthState(auth);

    return { user, loading }
}