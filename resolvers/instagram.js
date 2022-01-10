const { UserInputError } = require("apollo-server-express");
const {  } = require("axios");
const { fetch } = require("node-fetch");
const {  } = require("");
const {  } = require("");

const resolvers = {
    Query: {
        userData: () => {
            const response =await fetch(`https://graph.instagram.com`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.long(err));
        },
        businessDiscoverData: () => {
            const response =await fetch(`https://graph.instagram.com`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.long(err));
        },
        webhooks: () => {
            const response =await fetch(`https://graph.instagram.com`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.long(err));
        },
        hashtaggedMediaData: () => {
            const response =await fetch(`https://graph.instagram.com`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.long(err));
        },
        mediaPublishData: () => {
            const response =await fetch(`https://graph.instagram.com`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.long(err));
        },
        insights: () => {
            const response =await fetch(`https://graph.instagram.com`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.long(err));
        },
    }
};