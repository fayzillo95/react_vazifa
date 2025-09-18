"use client"

import { districts as dist, regions } from "@/types/Country.type";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [selectedAdres, setSelectedAddress] = useState<string | null>(null)
  const [targetRegionID, setTargetRegionId] = useState<string | null>(null)
  const [targetAdreessId, setTargetAdresId] = useState<string | null>(null)
  const [adres, setAdres] = useState<string>("")

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="container mx-auto">
        <h1>Manzilni Talang</h1>
        <select
          className="border-2"
          value={selectedRegion ?? ""}
          onChange={e => {
            const id = e.target.selectedOptions[0].id
            setTargetRegionId(id)
            setTargetAdresId(null)
            setSelectedRegion(e.target.value)
            setSelectedAddress(null)
            setAdres(regions.find(region => region.id === id)?.label || e.target.value)
          }
          }
          style={{
            height: 40, width: 250
          }}>
          {
            regions.map(el => (
              <option key={el.id} id={el.id} label={el.label}>{el.value}</option>
            ))
          }
        </select>
        {
          selectedRegion ? (
            <div>
              <select
                value={selectedAdres ?? ""}
                onChange={e => {
                  setSelectedAddress(e.target.value)
                  const id = e.target.selectedOptions[0].id
                  setAdres(state => state + "  " + dist[selectedRegion].find(d => d.id === id)?.label || e.target.value)
                }}
                id=""
                style={{
                  height: 40, width: 250
                }}
              >
                {
                  dist[selectedRegion].map(el => (
                    <option key={el.id} label={el.label} id={el.id}>{el.value}</option>
                  ))
                }
              </select>
            </div>
          ) : ""
        }
        {
          selectedAdres ? <h1>Tanlangan joy  {adres}</h1> : ""
        }
      </div>
    </div>
  );
}
