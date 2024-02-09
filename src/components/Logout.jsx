import { getAuth, signOut } from "firebase/auth";


export default function Logout(){

    function handleLogout(){
        const auth = getAuth();
        console.log(auth)
        signOut(auth).then(() => {
        // Sign-out successful.
            console.log('user signed out')
            console.log(auth)
        }).catch((error) => {
        // An error happened.
            console.error(error)
        });
    }

    return(
        <>
            <button onClick={handleLogout}>Logout</button>
        </>

    )
}