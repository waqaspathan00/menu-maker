import { loginWithGoogle, logoutWithGoogle } from "../lib/firebase";

export default function Home({ menus })
{
    
    return (
        <div>
            {console.log(menus)}
            <button onClick={loginWithGoogle}>Sign In</button>
            <button onClick={() => logoutWithGoogle()}>Sign Out</button>
            <h1>This will be the homepage</h1>
        </div>
    )
}


// For reference

// export async function getServerSideProps(context)
// {
//     const req = await fetch("http://127.0.0.1:8000/api/view/menu")
//     const res = await req.json();

//     if (!res)
//     {
//         return {
//             notFound: true,
//         }
//     }

//     return {
//         props: { menus: res }
//     }
// }