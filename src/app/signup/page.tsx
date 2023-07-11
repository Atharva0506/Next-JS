"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import {axios} from "axios";

export default function SignPage(){
    const [user, setUser] = React.useState({
        email :"",
        password :"",
        username: "",
    })
    const onSignup = async () => {

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text ">Sign Up</h1>
            <hr />
            <label htmlFor="username" >User Name</label>
            <input type="text" className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" 
            id="username" 
            value={user.username} 
            onChange={(e)=>setUser({...user ,username: e.target.value})} 
            placeholder="User Name"/>


            <label htmlFor="email" >Email</label>
            <input type="email" className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" 
            id="email" 
            value={user.email} 
            onChange={(e)=>setUser({...user ,email: e.target.value})} 
            placeholder="Email"/>


            <label htmlFor="password" >Password</label>
            <input type="password" className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" 
            id="password" 
            value={user.password} 
            onChange={(e)=>setUser({...user ,password: e.target.value})} 
            placeholder="Password"/>


            <button onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Signup</button>
            <Link href="/login">Visit login page</Link>


        </div>
    )
}