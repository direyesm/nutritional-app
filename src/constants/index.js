const base_url="https://api.edamam.com/search";
const api_id="fd383bd3"
const  api_key="b434c4b266fda13fb9c611d96fa94c3a"


export const getApiUrl = query => `${base_url}?q=${query}&app_id=${api_id}&app_key=${api_key}`

