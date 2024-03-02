import React, { useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    console.log(auth?.currentUser?.email)

    function register(e) {
        e.preventDefault()
        async function registerUser() {
            try {
                createUserWithEmailAndPassword(auth, email, pass)
            } catch (error) {
                console.error(error)
            }
        }
        registerUser()
    }

    function logOut() {
        signOut(auth)
    }

    function loginUser(e) {
        e.preventDefault();
        async function login() {
            try {
                signInWithEmailAndPassword(auth, email, pass)
            } catch (error) {
                console.log(error)
            }
        }
        login()
    }

    return (
        <div>
            <form onSubmit={register}>
                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="text" value={pass} onChange={(e) => { setPass(e.target.value) }} />
                <button type='submit'>Register</button>
            </form>
            <form onSubmit={loginUser}>
                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <input type="text" value={pass} onChange={(e) => { setPass(e.target.value) }} />
                <button type='submit'>Login</button>
            </form>
            <button onClick={logOut}>Sign Out</button>
        </div>
    )
}

export default Login