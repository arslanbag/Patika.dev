
import axios from 'axios';
import { API_BASE_URL as BASE,
API_GET_ALL_CATEGORY as GET_ALL_CATEGORY ,
API_GET_PRODUCTS_BYCATEGORY as GET_PRODUCTS_BYCATEGORY,
API_GET_PRODUCT_BYID as GET_PRODUCT_BYID} from '@env';
import { useEffect, useState } from 'react';


export function  useFetch (URI: string){
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState<any>([])

   async function useData() {
    const   {data: response} = await axios.get(BASE + URI)
    try {
      setData(response)
    } catch (err: any) {
      setError(err.message)
    }
      setLoading(false)
  }

  useEffect(() => {
    useData()
  } , [] )

  return {data,loading, error}
}

export const apiUri = {  GET_ALL_CATEGORY  ,GET_PRODUCTS_BYCATEGORY , GET_PRODUCT_BYID}