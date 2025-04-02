require('dotenv').config();
module.exports ={
    API_BASE_URL: "http://20.244.56.144/evaluation-service",
    AUTH_URL: "http://20.244.56.144/evaluation-service/auth",
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    ACCESS_CODE: process.env.ACCESS_CODE,
    EMAIL: process.env.EMAIL,
    NAME: process.env.NAME,
    ROLL_NO: process.env.ROLL_NO,
    API_BASE_URL: process.env.API_BASE_URL,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    WINDOW_SIZE: 10 
};
