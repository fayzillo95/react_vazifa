import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import * as yup from "yup"
import { Link, useLocation } from 'react-router-dom'
import { registerSchema } from "../registerSchema"

function Sign() {
    const [data, setData] = useState({})
    const [errors, setErrors] = useState({
    })
    const fields = ["firstName", "lastName", "email", "password"]
    const handleSubmit = async (e) => {
        e.preventDefault()
        Array.from(e.target).forEach((el, index) => {
            if (el.tagName === "INPUT") {
                const field = el.name
                data[field] = el.value
            }
        })
        try {
            const result = await registerSchema.validate(data, {
                abortEarly: false
            })
            console.log(result)
        } catch (error) {
            console.log(error.inner.map(el => [el.path, el.message]))
            error.inner.forEach(el => setErrors(prev => ({ ...prev, [el.path]: el.message })))
        }
    }


    return (
        <main className='w-full h-[95%] py-12 flex justify-center items-center bg-gradient-to-r from-[rgba(203,165,218,0.41)] to-red-800'>
            <form onSubmit={(e) => handleSubmit(e)} className='w-[600px] p-[50px] space-y-12 mx-auto shadow-2xl rounded-2xl h-[600px] flex flex-col bg-gradient-to-b from-green-500 to-blue-600'>
                {
                    fields.map((field, index) => {
                        return (
                            <div className='w-full ' key={index + "div"}>
                                <TextField
                                    className={errors[field] ? "text-red-600 " : ""}
                                    // color={errors[field] ? "error" : ""}
                                    label={field}
                                    required={field}
                                    key={index}
                                    fullWidth
                                    name={field}
                                    placeholder={field.toUpperCase() + "....."}
                                    type={["firstName", "lastName"].includes(field) ? "text" : field}
                                    onChange={() => errors[field] ? setErrors(prev => ({ ...prev, [field]: undefined })) : ""}
                                ></TextField>
                                {
                                    errors[field] ? <span className='text-red-600'>{errors[field]}</span> : ""
                                }
                            </div>
                        )
                    })
                }
                <Button type='submit' variant='contained'>
                    Submit
                </Button>
            </form>
        </main>
    )
}

export default Sign
