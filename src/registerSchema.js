import * as yup from "yup"

export const registerSchema = yup.object({
    firstName : yup.string().required().min(3),
    lastName : yup.string().required().min(3),
    email : yup.string().lowercase().email().required(),
    passowrd : yup.string().required().min(5)
})