'use client'

import { useEffect, useState } from "react";

import Location from "./_component/Location";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  interface data {
    id: string;
    name: string;
    parent: string | null;
    active: boolean;
  }
  const [locations, setLocations] = useState<data[]>([])

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
        const modifiedData = response.data.data.map((loc:any)=> ({
          ...loc,
          active: true
        }));
        setLocations(modifiedData)
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }, [])

  const toggleActive = (id: string) => {
    const updatedLocations = locations.map(location => {
      if (location.id === id) {
        return { ...location, active: !location.active };
      }
      return location;
    });
    setLocations(updatedLocations);
  }

  return (
    <main className="flex justify-center">
      <div className="w-1/2 my-20">
        <h1 className="font-bold">Territories</h1>
        <div className="font-semibold">Here are the list of territories</div>
        <ul>
          <Location locations={locations} parent={null} toggleActive={toggleActive}/>
        </ul>
      </div>
    </main>
  );
}
