import { useEffect, useState } from "react";
import {SUGGESTED_VIDEO_LIST_API_URL} from "../utils/constant"
const useGetSuggestedVdo = ()=>{
    const[suggestedVdo, setSuggestedVdo] = useState([]);
    useEffect(()=>{
        getSuggestedVdo("SqcY0GlETPk");
    }, [])

    const getSuggestedVdo = async (videoId) =>{
        const apiCall = await fetch(SUGGESTED_VIDEO_LIST_API_URL+videoId);
        const fetchedData = await apiCall.json();
        console.log(fetchedData?.items);
        setSuggestedVdo(fetchedData?.items);
    }
    return suggestedVdo;
}
export default useGetSuggestedVdo;