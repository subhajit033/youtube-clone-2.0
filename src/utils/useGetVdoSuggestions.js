import { useState, useEffect } from "react";

const useGetVdoSuggestions = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getVdoSuggestions("codewithharry");
  }, []);
  const getVdoSuggestions = async (searchQuery) => {
    const apiCall = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=AIzaSyCPKc81lUOLhviVHldc6EeruLp9qFliKcc`
    );
    const fetchedData = await apiCall.json();
    setData(fetchedData);
    // console.log(fetchedData);
  };
  return data;
};
export default useGetVdoSuggestions;
