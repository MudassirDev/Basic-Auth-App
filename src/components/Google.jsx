import React, { useState } from 'react'
import { auth, google } from '../firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

function Google() {
    const [test, setTest] = useState("")

    console.log(auth?.currentUser?.email)

    function loginUser() {
        signInWithPopup(auth, google)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });

    }

    async function logoutUser() {
        try {
            signOut(auth)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <button onClick={loginUser}>Login</button>
            <button onClick={logoutUser}>LogOut</button>
            <input type="text" value={test} onChange={(e) => { setTest(e.target.value) }} />
        </div>
    )
}

export default Google