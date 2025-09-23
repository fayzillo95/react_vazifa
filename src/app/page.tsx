"use client"

import axios from "axios";
import { useEffect, useState } from "react";

type registerDataType = {
  id: number,
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Home() {

  const [users, setUsers] = useState<registerDataType[]>([]);
  const [selectedId, setSelectedId] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div>
      <head>
        
      </head>
      <main>

      </main>
    </div>
  )
}
