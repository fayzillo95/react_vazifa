

import React, { useEffect, useState } from 'react'

function Home() {
    let [persons, setData] = useState([])
    let defaultUser = {
        "createdAt": "2025-08-19T21:50:07.816Z",
        "firstName": "Norberto",
        "lastName": "Yost",
        "email": "Ally.Kirlin75@yahoo.com",
        "avatar": "https://avatars.githubusercontent.com/u/82901361",
        "id": "1"
    }
    useEffect(() => {
        fetch("https://689e30493fed484cf8769099.mockapi.io/api/v11/users").then(async (data) => {
            data = await data.json()
            setData(data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div className="flex w-[850px] h-[550px] shadow-[10px_10px_10px_rgba(1,1,1,0.5)] justify-center items-center rounded-3xl mx-auto bg-gradient-to-b from-violet-600 to-purple-200 backdrop-blur-3xl">
            <div className="w-[400px] h-[500px] rounded-2xl flex flex-col gap-y-[20px] items-center bg-transparent overflow-y-scroll relative">
                <h1 className='flex justify-center fixed w-[400px] h-[40px] rounded-2xl z-10 bg-gradient-to-b from-violet-600 to-purple-200 items-center text-center '>Followers</h1>
                <ul className='w-full flex flex-col gap-y-2.5 mt-[50px] relative z-9'>
                    {
                        persons.map((person, index) => {
                            const keyItem = `item_person_id_${person.id}`
                            return (
                                <li className="flex gap-x-2.5 sticky" key={keyItem}>
                                    <img className='size-[50px] rounded-full' src={person.avatar} alt="" />
                                    <div className='pl-[5px] w-full bg-gradient-to-t from-green-200 to-gray-600'>
                                        <h2>Name : {defaultUser['firstName']  + " " + defaultUser['lastName']}</h2>
                                        <h3>Email : {person.email}</h3>
                                        <h4>Date : {person.createdAt.split("T").join(" ").slice(0, -5)}</h4>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="w-[400px] h-[500px] flex flex-col items-end">
                <div className="flex flex-col w-[90%] gap-x-2.5 sticky items-center gap-y-5" key={`item_person_id_999`}>
                    <img className='size-[200px] rounded-2xl' src={defaultUser.avatar} alt="" />
                    <div className='space-y-11 pl-[16px] w-full bg-gradient-to-t from-green-200 to-gray-600'>
                        <h2>Name : {defaultUser['firstName']  + " " + defaultUser['lastName']}</h2>
                        <h3>Email : {defaultUser.email}</h3>
                        <h4>Date : {defaultUser.createdAt.split("T").join(" ").slice(0, -4)}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

/*
  {
    "createdAt": "2025-08-19T19:47:58.614Z",
    "name": "Guadalupe Herman",
    "avatar": "https://avatars.githubusercontent.com/u/13607490",
    "addres": "Pennsylvania",
    "id": "1"
  },
*/