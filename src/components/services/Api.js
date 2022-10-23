import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '?key=29745254-668a4ef84f81b3be2971a230f';
// const paginationParams = '&page=1&per_page=3'; //12

export const fetchImageList = async (searchQuery, pageNum) => {
    const QUERY_PARAMS = `&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
    const paginationParams = `&page=${pageNum}&per_page=12`;

    const res = await axios.get(API_KEY + QUERY_PARAMS + paginationParams);
    return res.data;
}
