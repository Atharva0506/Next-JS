"use client";
import axios  from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function ProfilePage(){
    const router = new useRouter();
    const logout = async ()=>{
        try {
            await axios.get("api/users/logout")
            console.log('Logout successful')
            router.push("/login")
        } catch (error:any) {
            console.log(error);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1>Profile </h1>
            <hr />
            <p>Profile Page</p>

            <button onClick={logout}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Logout</button>
        </div>
    )
}