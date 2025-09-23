"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import Link from "next/link";
import { Edit, Delete } from "@mui/icons-material"
import { error } from "console";
type registerDataType = {
  id: number,
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Home() {

  const [users, setUsers] = useState<registerDataType[]>([]);
  const [selectedId, setSelectedId] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios.get("/api/users")
      .then(resolve => setUsers(resolve.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (isLoading) {
      axios.get("/api/users")
        .then(resolve => setUsers(resolve.data))
        .catch(error => console.log(error));
      setIsLoading(false)
    }
  }, [isLoading])

  const handleDelete = (id: number) => {
    axios.delete("/api/user/" + id).then(resolve => {
      console.log(resolve)
      setIsLoading(true)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      {
        !!localStorage.getItem("user") ? 
        <div className="flex">
          <Button variant="contained"> <Link href="/profile">Profile</Link></Button>
          <Button variant="contained" onClick={() => {
            localStorage.removeItem("user")
          }}> <Link href="/login">Log out</Link></Button>
        </div>
        : <div className="flex">
          <Button variant="contained"> <Link href="/register">Register</Link></Button>
          <Button variant="contained"> <Link href="/login"> Login</Link></Button>
        </div>
      }
      <main className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-8 ov0">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">All Users</h1>
        <div className="container mx-auto">
          {users.map((user) => (
            <Card key={user.id} className="shadow-xl rounded-2xl hover:scale-105 transition-transform duration-300">
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
                <Button variant="contained" onClick={() => handleDelete(user.id)}> <Delete></Delete></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
