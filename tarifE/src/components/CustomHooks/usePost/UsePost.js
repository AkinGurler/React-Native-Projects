import { View, Text} from 'react-native'
import React ,{useState} from 'react'
import axios from 'axios'

const usePost = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const handlePost = async (url, data) => {
        console.log("hadnlepost Calisti")
        try {
            setLoading(true)
            const { data: responseData } = await axios.post(url, data)

            console.log("responsedtata",responseData)
            setLoading(false)
            setData(responseData)
            
        } catch (error) {
            setError(error.message)
        }
    }
    return { data, error, loading, handlePost }
}
export default usePost