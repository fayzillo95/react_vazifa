"use client"

import { Card, CardContent, Typography } from '@mui/material'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type registerDataType = {
    id: number,
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};
function page() {

    const [user, setUser] = useState<registerDataType>()

    useEffect(() => {
        const result = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "Salom") : ""
        console.log(result)
        if (typeof result === "object") {
            setUser(result)
        }
    }, [])

    return (
        <div>
            <div className="contanier mx-auto">
                <Link href="/">Home</Link>
                <div className="profile">
                    {
                        user ? <Card className="shadow-xl w-max rounded-2xl hover:scale-105 transition-transform duration-300">
                            <CardContent className="p-6">
                                <Typography variant="h6" className="font-bold mb-2 text-indigo-700">
                                    {user.firstName} {user.lastName}
                                </Typography>
                                <Typography variant="body2" className="text-gray-600 mb-1">
                                    <span className="font-semibold">Email:</span> {user.email}
                                </Typography>
                                <Typography variant="body2" className="text-gray-600">
                                    <span className="font-semibold">ID:</span> {user.id}
                                </Typography>
                            </CardContent>
                        </Card> : ""
                    }
                </div>
            </div>
        </div>
    )
}

export default page