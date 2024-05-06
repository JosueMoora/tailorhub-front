"use client"
import { useEffect, useState } from "react"

const useSplash = () => {
  
    const [showSplash, setSplash] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setSplash(false)
        }, 1500)
    }, [])

    return {
        showSplash,
    }
}

export default useSplash