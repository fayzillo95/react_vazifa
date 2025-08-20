

import React, { useEffect, useState } from 'react'

function Home() {
    let [persons, setData] = useState([])

    useEffect(() => {
        fetch("https://689e30493fed484cf8769099.mockapi.io/api/v11/users").then(async (data) => {
            data = await data.json()
            setData(data)
            console.log(data)
        }).catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <div className="flex w-[850px] h-[550px] shadow-[10px_10px_10px_rgba(1,1,1,0.5)] justify-center items-center rounded-3xl mx-auto bg-gradient-to-b from-violet-600 to-purple-200 backdrop-blur-3xl">
            <div className="w-[400px] h-[500px] rounded-2xl flex flex-col gap-y-[20px] items-center bg-transparent overflow-y-scroll relative">
                    <h1 className='flex justify-center fixed w-[400px] h-[40px] rounded-2xl z-10 bg-gradient-to-b from-violet-600 to-purple-200 items-center text-center '>Followers</h1>
                    <ul className='w-full flex flex-col gap-y-2.5 mt-[40px] relative z-9'>
                        {
                            persons.map((person,index) => {
                                const keyItem = `item_person_id_${index}`
                                return (
                                    <li className="flex gap-x-2.5" key={keyItem}>
                                        <img className='size-[50px] rounded-full' src={person.avatar} alt="" />
                                        <div className='pl-[5px] w-full bg-gradient-to-t from-green-200 to-gray-600'>
                                            <h2>Name : {person.name}</h2>
                                            <h3>State : {person.addres}</h3>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
            </div>
            <div className="w-[400px] h-[500px]">

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