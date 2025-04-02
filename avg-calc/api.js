const axios =require('axios');
const { API_BASE_URL,ACCESS_TOKEN } =require('./config');
async function fetchNumbers(type) {
    if (!ACCESS_TOKEN) {
        console.error("Not found");
        return [];}
    try {
        const response=await axios.get(`${API_BASE_URL}/${type}`,{
            headers:{ Authorization:`Bearer ${ACCESS_TOKEN}`}
        });
        console.log(`Received ${type}:`,response.data.numbers);
        return response.data.numbers;
    } catch (error) {
        console.error(`Error fetch ${type}:`, error.response?.data || error.message);
        return [];
    }
}

module.exports={fetchNumbers};
