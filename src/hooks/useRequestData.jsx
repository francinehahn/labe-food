import axios from "axios"
import { useEffect, useState } from "react"

export function useRequestData(url, token) {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [reload, setReload] = useState(undefined)

    useEffect(() => {
        setIsLoading(true)
        axios.get(url, {         
            headers: {
                auth: token
            }
        })
        .then((response)=>{
            setIsLoading(false)
            setData(response.data)
        })
        .catch((er)=>{
            setIsLoading(false)
            setError(er.response.data.message.message)
        })
    }, [reload])

    return [data, error, isLoading, reload, setReload]
}
