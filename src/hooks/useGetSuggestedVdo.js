import { useEffect, useState } from "react";
import { SUGGESTED_VIDEO_LIST_API_URL } from "../utils/constant";
const useGetSuggestedVdo = (videoId) => {
  const [suggestedVdo, setSuggestedVdo] = useState([]);
  useEffect(() => {
    getSuggestedVdo(videoId);
    //it must depended on videoId
  }, []);

  const getSuggestedVdo = async (videoId) => {
    const apiCall = await fetch(SUGGESTED_VIDEO_LIST_API_URL + videoId);
    const fetchedData = await apiCall.json();

    setSuggestedVdo(fetchedData?.items);
  };
  return suggestedVdo;
};
export default useGetSuggestedVdo;
