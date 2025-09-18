"use client"

import { District, DistrictInID, Region } from '@/types/Country.type'
import React from 'react'
import { districts as dist, regions } from "@/types/Country.type";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

function Regions() {

    const [selectedRegionId, setSelectedRegionId] = useState<string>("");  // faqat ID saqlaymiz
    const [targetRegion, setTargetRegion] = useState<string>("")
    const [selectedDistrictId, setSelectedDistrictId] = useState<string>("");
    const [adres, setAdres] = useState<string>("");

    const handleChangeRegion = (e: any) => {
        const id = e.target.value;
        setSelectedDistrictId(""); // reset
        const region = regions.find(r => r.id === id);
        setSelectedRegionId(id);
        setTargetRegion(region?.value!)
        setAdres(region ? region.label : "");
    };

    const handleChangeDistrict = (e: any) => {
        const id = e.target.value;
        setSelectedDistrictId(id);
        const district = dist[targetRegion].find(d => d.id === id);
        setAdres(prev => prev + " " + (district ? district.label : ""));
    };

    return (
        <div className='space-y-4 h-50'>

            <h1 className="text-lg font-bold">Manzilni tanlang</h1>

            <Select
                fullWidth
                value={selectedRegionId}
                onChange={handleChangeRegion}
                displayEmpty
            >
                <MenuItem value="" disabled>Regionni tanlang</MenuItem>
                {regions.map(el => (
                    <MenuItem key={el.id} value={el.id}>
                        {el.label}
                    </MenuItem>
                ))}
            </Select>

            {selectedRegionId && (
                <Select
                    fullWidth
                    value={selectedDistrictId}
                    onChange={handleChangeDistrict}
                    displayEmpty
                >
                    <MenuItem value="" disabled>Districtni tanlang</MenuItem>
                    {dist[targetRegion].map(el => (
                        <MenuItem key={el.id} value={el.id}>
                            {el.label}
                        </MenuItem>
                    ))}
                </Select>
            )}
        </div>
    )
}

export default Regions