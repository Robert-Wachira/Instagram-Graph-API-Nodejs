// const { UserInputError } = require("apollo-server-express");
// // const bizSdk = require('facebook-nodejs-business-sdk');
// // const Ad = bizSdk.Ad;
// // const Lead = bizSdk.Lead;


// // const { get } = require("axios").default;
// // const { post } = require("request");
// const dotenv = require("dotenv");

// const access_token = '<ACCESS_TOKEN>';
// const app_secret = '<NSTAGRAM_APP_SECRE>';
// const app_id = '<INSTAGRAM_APP_ID>';
// // const id = '<LEAD_ID>';


// async function getShortLivedAccessToken(){
//     //sending the request
//     let{ body, statusCode } = await postAsync({
//         url:`https://api.instagram.com/oauth/access_token`,
//         formData: {
//             client_id:process.env.INSTAGRAM_APP_ID,
//             client_secret:process.env.INSTAGRAM_APP_SECRET,
//             redirect_uri:"https://httpstat.us/200",
//             code:process.env.AUTHORIZATION_CODE,
//             grant_type:"authorzation_code",
//         },
//         headers:{
//             "content-type": "multipart/form-data",
//             host:"api.instagram.com",
//         },
//     });

//     //getting the response
//     let response = JSON.parse(body);

//     //checking the status code for error
//     if(statusCode !== 200){
//         let error_message = response.error_message;
//         //if error exists, sending the error
//         return new UserInputError(error_message);
//     }

//     //if there is no error, returning the response
//     return response;
// };

// module.exports = {
//     getShortLivedAccessToken,
// };


