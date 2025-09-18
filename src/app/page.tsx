"use client"

import Regions from "@/components/country";
import { districts, regions, registerInputs } from "@/types/Country.type";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material"

export default function Home() {

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="h-screen w-full">
      <div className="container mx-auto flex justify-center items-center h-screen">
        <form className="w-[500px] h-[600px] flex flex-col gap-6 p-4 shadow-2xl rounded-2xl">
          <h1 className="font-extrabold bg-gradient-to-b from-violet-800 to-red-600 bg-clip-text text-transparent text-2xl">Soxta forma</h1>
          {registerInputs.map((input) => (
            <TextField
              key={input.id}
              name={input.name}
              label={input.label}
              placeholder={input.placeholder}
              type={input.hasToggle ? (showPassword ? "text" : "password") : input.type}
              fullWidth
              InputProps={
                input.hasToggle
                  ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                  : undefined
              }
            />
          ))}
          <Regions />
          <h1 className="w-1/3 mx-auto h-11 border-2 text-center py-2 rounded-2xl bg-green-400 cursor-pointer">SUBMIT</h1>
        </form>
      </div>
    </div>
  );
}
