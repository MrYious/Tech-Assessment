'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    if (!sessionStorage.getItem('user')) {
      router.replace('/account/login')
    }
  }, [])


  return (
    <main>
      
    </main>
  );
}
