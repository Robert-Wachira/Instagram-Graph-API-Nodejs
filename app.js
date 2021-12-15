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





const typeDefs = gql`

type Query {
    userData:[UserData!]!
    businessDiscoveryData: [BusinessDiscoveryData!]!
    webhooks: [Webhooks!]!
    hashtaggedMediaData: [HashtaggedMediaData!]!
    mediaPublishData:[MediaPublishData!]!
    insights:[Insights!]!
}
    type UserData{
        caption: String
        id: String
        media_type: String
        media_url: String
        permalink: String
        thumbnail_url: String
        timestamp: Date
        username: String
    }

    type BusinessDiscoveryData{
    followers_count:Int
    media_count:Int
    likes_count:Int
    media_url:String
  }

  type Webhooks {
        media_id: Int!
        comment_id: String!
        message: String!
    }

    type HashtaggedMediaData{
    id: Int!
    caption: String
    media_url: String
    children: String
    media_type: String
    comments_count: Int!
    like_count: Int!
    permalink: String
    timestamp: Date
  }

  type MediaPublishData{
    media_type: String!
    media_url: String!
    caption: String
  }

  type Insights{
    impressions: Int!
    profile_views: Int!
    reach: Int
    timestamp: Date
  }

`;


const resolvers = {
    Query: {
        userData: () => {
            const response =await fetch(`https`)
            return response.json ;
        }
    }
};


// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true,
// }));
// const express = require ('express');
// const dotenv = require(dotenv);
// const graphql, {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = require('graphql');
// const {graphqlHTTP} = require("express-graphql");


// const app = express();


// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//     console.log(`Listening on port ${port}...`);
// });


// const UserType = new GraphQLObjectType({
//     name: "User",
//     fields: () => ({
//         id: { type: GraphQLInt},
//         firstName: { type: GraphQLString},
//         lastName: { type: GraphQLString},
//         email: { type: GraphQLString},
//         password: { type: GraphQLString},
//     })
// })


// const RootQuery = new GraphQLObjectType({
//     name: "RootQueryType",
//     fields: {
//         getAllUsers: {
//             type: new GraphQLList(UserType),
//             args: { id: { type: GraphQLInt }},
//             resolve(parent, args){
//                 return userData
//             }
//         },
//         getUserById: {

//         }
//     }
// })

// const Mutation = new GraphQLObjectType({
//     name: "Mutation",
//     fields: {
//         createUser:{
//             type: UserType,
//             args: {
//                 firstName: { type: GraphQLString},
//                 lastName: { type: GraphQLString},
//                 email: { type: GraphQLString},
//                 password: { type: GraphQLString},
//             },
//             resolve(parent, args){
//                 userData
//             }
//         }
//     }
// })

// const schema = new graphql.GraphQLSchema({query: RootQuery, mutation: Mutation});

// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true,
// }));

