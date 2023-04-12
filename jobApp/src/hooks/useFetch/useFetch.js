import { View, Text } from 'react-native'
import axios from 'axios'
import React ,{useState} from 'react'

const useFetch = () => {
    
    const [err, setErr] = useState(null)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = async (url) => {
        try {
            const { data : response } = await axios.get(url)
            setLoading(false)
            setData(response.results)
        } catch (error) {
            setErr(error.message)
            setLoading(false)
        }
    }

    return { data,loading,err,fetchData}
}

export default useFetch