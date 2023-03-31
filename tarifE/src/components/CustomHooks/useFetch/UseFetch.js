import axios from "axios"
import {useState,useEffect} from "react"


function useFecth(url) {
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const APIURL = process.env.REACT_APP_API_URL

    const fetchData = async () => {
        try {
            const { data:responseData } = await axios.get(url)
            setLoading(false);
            setData(responseData)
        } catch (error) {
            setError(error.message);
            setLoading(false);

        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return { error, data, loading };
}

export default useFecth;