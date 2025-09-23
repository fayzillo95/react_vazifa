"use client"

import TextField from "@mui/material/TextField";
import { GroupCreateType, groupInputs } from "./create.group.type";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

export default function AddGroup() {

    const [groupData, setGroupData] = useState<GroupCreateType>({
        daysOfWeek: "",
        monthDuration: "",
        name: "",
        startDate: ""
    })

    const handleChange = (field: keyof GroupCreateType, value: string) => {
        setGroupData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await axios.post("/api/group", groupData)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <main>
            <div className="container mx-auto not-only:">
                <form onSubmit={handleSubmit} className="flex flex-col w-[400px] gap-4">
                    {
                        groupInputs.map(({ name, label, placeholder, type }, index) => (
                            <TextField
                                key={name}
                                label={name != "startDate" ? label : ""}
                                type={type}
                                placeholder={name != "startDate" ? placeholder : ""}
                                value={groupData[name]}
                                onChange={(e) => handleChange(name, e.target.value)}
                            />
                        ))
                    }
                    <Button variant="contained" type="submit">Yaratish</Button>
                </form>
            </div>
        </main>
    )
}