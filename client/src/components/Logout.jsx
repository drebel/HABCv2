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
            <button className="btn btn-outline-primary mx-2" onClick={handleLogout}>Logout</button>
        </>

    )
}