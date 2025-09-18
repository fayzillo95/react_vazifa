import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, CardMedia, List, ListItem, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

function Users({ url = "https://689e30493fed484cf8769099.mockapi.io/api/v11/properties" }) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url).then((response) => response.json()).then((res) => {
            console.log(res)
            setData(res)
        })
    }, [])

    return (
        <section className='h-[95%] overflow-y-scroll bg-gradient-to-b from-green-600 to-blue-600'>
            <div className="container mx-auto grid grid-cols-3 gap-4 my-10 max-lg:grid-cols-2 max-md:grid-cols-1 over">
                {
                    data.map((element, index) => (
                        <Card key={element.id}>
                            <CardMedia image={element.img} sx={{ height: 150 }} />
                            <CardContent>
                                <Typography sx={{ fontSize: 25 }}>{element.name}</Typography>
                                <Typography sx={{ fontSize: 15 }}>{element.owner}</Typography>
                                <Typography sx={{ fontSize: 10 }}>{element.adress}</Typography>
                                <Box>
                                    <Typography>Baths {element.baths}</Typography>
                                    <Typography>Beds {element.beds}</Typography>
                                    <Typography>Garages {element.garage}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>I
        </section>
    )
}

export default Users