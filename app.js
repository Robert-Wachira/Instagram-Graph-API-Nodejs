const express = require ("express");
const dotenv = require("dotenv");
const graphql = require('graphql');
const {graphqlHTTP} = require("express-graphql");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/type-defs");
const resolvers = require("./resolvers/instagram");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors())

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

app.get("/get-auth-code", (req, res, next) => {
    return res.send(
        `<a href = 'https://api.instagram.com/oauth?client_id=${process.env.INSTAGRAM_APP_ID}&redirectt_uri=${process.env.REDIRECT_URI}&scope=user_media,user_profile&reponse_type=code'>Connect to Instagram</a>`
    );
});

const server = new ApolloServer({ typeDefs, resolvers});
server.start().then(() => {
    return server.applyMiddleware({ app });
});
