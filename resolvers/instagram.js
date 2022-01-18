const { UserInputError } = require("apollo-server-express");
const {  } = require("axios");
const { fetch } = require("node-fetch");
const {  } = require("");
const {  } = require("");


async function getUserData() {
    let response;

    try {
      response = await get("https://graph.instagram.com/me/accounts", {
        params: {
          fields: "caption, id, media_type,media_url,permalink, thumbnail_url, timestamp, username",
          access_token: process.env.LONG_LIVED_AT,
        },
        headers: {
          host: "graph.instagram.com",
        },
      });
    } catch (error) {
      return new UserInputError(error);
    }


    response = response["data"];
    return response;
  }

  async function getBusinessDiscoverData() {
    let response;

    try {
      response = await get("https://graph.instagram.com/me/business_discovery", {
        params: {
          fields: "followers_count, media_count, likes_count, media_url",
          access_token: process.env.LONG_LIVED_AT,
        },
        headers: {
          host: "graph.instagram.com",
        },
      });
    } catch (error) {
      return new UserInputError(error);
    }

    response = response["data"];
    return response;
  }

  async function getWebhooks() {
    let response;

    try {
      response = await get("https://graph.instagram.com/me", {
        params: {
          fields: "media_id, comment_id, message",
          access_token: process.env.LONG_LIVED_AT,
        },
        headers: {
          host: "graph.instagram.com",
        },
      });
    } catch (error) {
      return new UserInputError(error);
    }

    response = response["data"];
    return response;
  }

  async function getHashtaggedMediaData() {
    let response;

    try {
      response = await get("https://graph.instagram.com/me", {
        params: {
          fields: "id, caption, media_url, children, media_type, comments_count, likes_count, permalink, timestamp",
          access_token: process.env.LONG_LIVED_AT,
        },
        headers: {
          host: "graph.instagram.com",
        },
      });
    } catch (error) {
      return new UserInputError(error);
    }

    response = response["data"];
    return response;
  }

  async function getMediaPublishData() {
    let response;

    try {
      response = await get("https://graph.instagram.com/me/media", {
        params: {
          fields: "media_type, media_url, caption",
          access_token: process.env.LONG_LIVED_AT,
        },
        headers: {
          host: "graph.instagram.com",
        },
      });
    } catch (error) {
      return new UserInputError(error);
    }

    response = response["data"];
    return response;
  }

  async function getInsights() {
    let response;

    try {
      response = await get("https://graph.instagram.com/me/insights", {
        params: {
          fields: "impressions, profile_views, reach, timestamp",
          access_token: process.env.LONG_LIVED_AT,
        },
        headers: {
          host: "graph.instagram.com",
        },
      });
    } catch (error) {
      return new UserInputError(error);
    }

    response = response["data"];
    return response;
  }
// const resolvers = {
//     Query: {
//         userData: () => {
//             fetch(`https://graph.instagram.com`)
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(err => console.long(err));
//         },
//         businessDiscoverData: () => {
//             const response =await fetch(`https://graph.instagram.com`)
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(err => console.long(err));
//         },
//         webhooks: () => {
//             const response =await fetch(`https://graph.instagram.com`)
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(err => console.long(err));
//         },
//         hashtaggedMediaData: () => {
//             const response =await fetch(`https://graph.instagram.com`)
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(err => console.long(err));
//         },
//         mediaPublishData: () => {
//             const response =await fetch(`https://graph.instagram.com`)
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(err => console.long(err));
//         },
//         insights: () => {
//             const response =await fetch(`https://graph.instagram.com`)
//             .then(response => response.json())
//             .then(data => console.log(data))
//             .catch(err => console.long(err));
//         },
//     }
// };

module.exports = {
                    getUserData,
                    getBusinessDiscoverData,
                    getHashtaggedMediaData,
                    getWebhooks,
                    getMediaPublishData,
                    getInsights,

};