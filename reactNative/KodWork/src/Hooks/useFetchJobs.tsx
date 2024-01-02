import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL_BASE as BASE , API_URL_GET_JOBS_BYPAGE as GET_JOBS_BYPAGE, API_URL_GET_JOB_BYID as  GET_JOB_BYID} from "@env";
import { IJobs } from "../Models";

export function useFetch(uri : string) {
    const [data, setData] = useState<IJobs>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    async function getData( ){
        try {
            const {data: response} = await axios.get(BASE+uri)
            setData(response)
        } catch (error: any) {
            setError(error.message)
        }
        setLoading(false)
    }

    useEffect (() => {
        getData()
    }, []) 

    return {data, loading, error}
}

export const apiUri = {GET_JOBS_BYPAGE, GET_JOB_BYID}
