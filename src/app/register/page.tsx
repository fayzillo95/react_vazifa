"use client"

import Button from '@mui/material/Button';
import React from 'react';
import { inputs } from "@/lib/Register.inputs"
import axios from "axios"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function MyForm() {
    const rout = useRouter()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);


        const data: registerDataType = {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        };
        axios.post("/api/users", { data }).then(resolve => {
            if ([200, 201].includes(resolve.status)) {
                console.log(resolve)
                const { data } = resolve
                localStorage.setItem("user", JSON.stringify(data))
                rout.push("/")
            }
        }).catch(error => console.log(error))
        console.log('Form submitted with data:', data);
    };

    return (
        <main className='min-h-screen'>
            <div className="container mx-auto min-h-screen flex items-center">
                <form onSubmit={handleSubmit} className='w-[400px] p-4 flex flex-col items-center justify-between h-[450px] shadow-[1px_1px_50px_#12152c] box-border text-[#12152c] mx-auto rounded-2xl bg-gradient-to-br from-violet-200 via-green-200 to-blue-300'>
                    {
                        inputs.map((inputcha, index) => {
                            const { name, label, placeholder, type, id } = inputcha
                            return (
                                <div className='flex flex-col justify-between w-full space-x-3 pl-2' key={`${index}${id}`}>
                                    <label htmlFor={inputcha.name} className=' text-[20px] uppercase tracking-wider italic border w-max bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent'>{label}</label>
                                    <input required type={type} placeholder={placeholder} name={name} className='border rounded-[5px] text-[20px] py-2 px-2 w-full' />
                                </div>
                            )
                        })
                    }

                    <Button type="submit" className='!bg-[rgb(104,204,84)] !px-6 !rounded-2xl' variant='contained'>Submit</Button>
                    <h1>I am exists already account <a href='/login' className='text-blue-500'>Login</a></h1>
                    <h1>
                        <Link href="/">Home</Link>
                    </h1>
                </form>
            </div>
        </main>
    );
}