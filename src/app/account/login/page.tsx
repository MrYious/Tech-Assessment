'use client'

import axios from "axios";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const handleSubmit = (e: any) =>{
        const data = {
            username,
            password
        }
        // To bypass CORS
        const pre = 'https://cors-anywhere.herokuapp.com/'
        const endpoint = 'https://netzwelt-devtest.azurewebsites.net/Account/SignIn'
        axios.post(pre + endpoint, data)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
            setErrorMsg('Invalid username or password')
        })
        e.preventDefault()
    }

    return (
        <main className="flex min-h-screen justify-center items-center">
            <div className="flex flex-col p-5 gap-3 w-1/3 border-[1px] border-gray-200 rounded bg-white shadow-md shadow-gray-500">
                <h1 className="text-center font-bold text-2xl">SIGN IN</h1>
                {/* ERROR MESSAGE */}
                {
                    errorMsg &&
                    <div className="p-1 w-full text-center text-red-600 bg-red-300 rounded">
                        {errorMsg}
                    </div>
                }
                {/* FORM */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required
                        className="p-1 outline-none border-[1px] border-gray-300"
                        value={username}
                        onChange={(e)=>{setUsername(e.target.value)}}
                    />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required
                        className="p-1 outline-none border-[1px] border-gray-300"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <button type="submit" className="p-2 bg-green-700 rounded hover:bg-green-800 text-white font-bold">
                        SUBMIT
                    </button>
                </form>
            </div>
        </main>
    );
}
