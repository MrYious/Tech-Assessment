'use client'

import { useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  interface Location {
    id: string;
    name: string;
    parent: string | null;
  }
  const [locations, setLocations] = useState<Location[]>([])

  useEffect(() => {
    if (!sessionStorage.getItem('user')) {
      router.replace('/account/login')
    } else {
      // To bypass CORS
      const pre = 'https://cors-anywhere.herokuapp.com/'
      const endpoint = 'https://netzwelt-devtest.azurewebsites.net/Territories/All'
      axios.get(pre + endpoint)
      .then((response)=>{
        console.log(response.data.data);
        setLocations([...response.data.data])
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }, [])


  return (
    <main className="flex justify-center">
      <div className="w-1/2 mt-20">
        <h1>Territories</h1>
        <div>Here are the list of territories</div>
        <ul>
          {
            locations.map((loc,i)=>{
              return <li key={i}>
                <span>*{loc.name}</span>
              </li>
            })
          }
        </ul>
      </div>
    </main>
  );
}
