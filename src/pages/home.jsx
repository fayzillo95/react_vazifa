
import { List, ListItem } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

function HomePage() {

    const location = useLocation()

    return (
        <main className='w-full overflow-hidden h-screen'>
            <section className='w-full h-[5%] bg-gradient-to-br from-violet-500 to-red-700'>
                <div className="container mx-auto">
                    <List sx={{ display: "flex", gap: 2, width: 400 }}>
                        <ListItem>
                            <NavLink to="/">Home</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to="users">Users</NavLink>
                        </ListItem>
                        <ListItem>
                            <NavLink to="sign">Sign</NavLink>
                        </ListItem>
                    </List>
                </div>
            </section>
            {
                location.pathname === "/" ? <section className='h-[95%] w-full grid grid-cols-4  gap-4 p-4'>
                    <div className='col-span-1 row-span-1 rounded-2xl border-2 bg-[rgba(1,1,1,0.5)] p-6 flex flex-col space-y-10'>
                        <h1 className='bg-gradient-to-br from-violet-700 to-red-700 bg-clip-text text-transparent w-max'>Home Box</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id similique reiciendis voluptates placeat ab eveniet esse libero non explicabo asperiores eum aut, omnis minus.
                        </p>
                    </div>
                    <div className='col-span-1 row-span-1 rounded-2xl border-2 bg-[rgba(1,1,1,0.5)] p-6 flex flex-col space-y-10'>
                        <h1 className='bg-gradient-to-br from-violet-700 to-red-700 bg-clip-text text-transparent w-max'>Home Box</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id similique reiciendis voluptates placeat ab eveniet esse libero non explicabo asperiores eum aut, omnis minus.
                        </p>
                    </div>
                    <div className='col-span-1 row-span-1 rounded-2xl border-2 bg-[rgba(1,1,1,0.5)] p-6 flex flex-col space-y-10'>
                        <h1 className='bg-gradient-to-br from-violet-700 to-red-700 bg-clip-text text-transparent w-max'>Home Box</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id similique reiciendis voluptates placeat ab eveniet esse libero non explicabo asperiores eum aut, omnis minus.
                        </p>
                    </div>
                    <div className='col-span-1 row-span-1 rounded-2xl border-2 bg-[rgba(1,1,1,0.5)] p-6 flex flex-col space-y-10'>
                        <h1 className='bg-gradient-to-br from-violet-700 to-red-700 bg-clip-text text-transparent w-max'>Home Box</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id similique reiciendis voluptates placeat ab eveniet esse libero non explicabo asperiores eum aut, omnis minus.
                        </p>
                    </div>
                    <div className='col-span-1 row-span-1 rounded-2xl border-2 bg-[rgba(1,1,1,0.5)] p-6 flex flex-col space-y-10'>
                        <h1 className='bg-gradient-to-br from-violet-700 to-red-700 bg-clip-text text-transparent w-max'>Home Box</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id similique reiciendis voluptates placeat ab eveniet esse libero non explicabo asperiores eum aut, omnis minus.
                        </p>
                    </div>
                    <div className='col-span-1 row-span-1 rounded-2xl border-2 bg-[rgba(1,1,1,0.5)] p-6 flex flex-col space-y-10'>
                        <h1 className='bg-gradient-to-br from-violet-700 to-red-700 bg-clip-text text-transparent w-max'>Home Box</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id similique reiciendis voluptates placeat ab eveniet esse libero non explicabo asperiores eum aut, omnis minus.
                        </p>
                    </div>
                    <div className='col-span-1 row-span-1 rounded-2xl border-2 bg-[rgba(1,1,1,0.5)] p-6 flex flex-col space-y-10'>
                        <h1 className='bg-gradient-to-br from-violet-700 to-red-700 bg-clip-text text-transparent w-max'>Home Box</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id similique reiciendis voluptates placeat ab eveniet esse libero non explicabo asperiores eum aut, omnis minus.
                        </p>
                    </div>
                    <div className='col-span-1 row-span-1 rounded-2xl border-2 bg-[rgba(1,1,1,0.5)] p-6 flex flex-col space-y-10'>
                        <h1 className='bg-gradient-to-br from-violet-700 to-red-700 bg-clip-text text-transparent w-max'>Home Box</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id similique reiciendis voluptates placeat ab eveniet esse libero non explicabo asperiores eum aut, omnis minus.
                        </p>
                    </div>
                    <div className='col-span-1 row-span-1 rounded-2xl border-2 bg-[rgba(1,1,1,0.5)] p-6 flex flex-col space-y-10'>
                        <h1 className='bg-gradient-to-br from-violet-700 to-red-700 bg-clip-text text-transparent w-max'>Home Box</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id similique reiciendis voluptates placeat ab eveniet esse libero non explicabo asperiores eum aut, omnis minus.
                        </p>
                    </div>
                    <div className='col-span-1 row-span-1 rounded-2xl border-2 bg-[rgba(1,1,1,0.5)] p-6 flex flex-col space-y-10'>
                        <h1 className='bg-gradient-to-br from-violet-700 to-red-700 bg-clip-text text-transparent w-max'>Home Box</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id similique reiciendis voluptates placeat ab eveniet esse libero non explicabo asperiores eum aut, omnis minus.
                        </p>
                    </div>
                    <div className='col-span-1 row-span-1 rounded-2xl border-2 bg-[rgba(1,1,1,0.5)] p-6 flex flex-col space-y-10'>
                        <h1 className='bg-gradient-to-br from-violet-700 to-red-700 bg-clip-text text-transparent w-max'>Home Box</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id similique reiciendis voluptates placeat ab eveniet esse libero non explicabo asperiores eum aut, omnis minus.
                        </p>
                    </div>
                    <div className='col-span-1 row-span-1 rounded-2xl border-2 bg-[rgba(1,1,1,0.5)] p-6 flex flex-col space-y-10'>
                        <h1 className='bg-gradient-to-br from-violet-700 to-red-700 bg-clip-text text-transparent w-max'>Home Box</h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et id similique reiciendis voluptates placeat ab eveniet esse libero non explicabo asperiores eum aut, omnis minus.
                        </p>
                    </div>
                </section> : <Outlet />
            }
        </main>
    )
}

export default HomePage