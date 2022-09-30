import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (url, token) => {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [reload, setReload] = useState(undefined)
    const [data1, setData1] = useState(undefined)
    const [error1, setError1] = useState(undefined)
    const [isLoading1, setIsLoading1] = useState(undefined)
    const [reload1, setReload1] = useState(undefined)

    useEffect(()=>{
        setIsLoading(true)
        axios.get(url, {         
                headers: {
                    auth: token
                }})
        .then((response)=>{
            setIsLoading(false)
            setData(response.data)
        })
        .catch((er)=>{
            setIsLoading(false)
            setError(er.response.data.message.message)
        })
    }, [reload1])

    return [data, error, isLoading, reload, setReload, data1, error1, isLoading1, reload1, setReload1]
}

export default useRequestData;