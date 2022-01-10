const { gql } = require("apollo-server-express");

const UserData = gql`
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
`;

const BusinessDiscoveryData = gql`
    type BusinessDiscoveryData {
        followers_count: Int
        media_count: Int
        likes_count: Int
        media_url: String
  }
`;

const Webhooks = gql`
  type Webhooks {
        media_id: Int!
        comment_id: String!
        message: String!
    }
`;
const HashtaggedMediaData = gql`
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
`;

const MediaPublishData = gql`
  type MediaPublishData{
     media_type: String!
     media_url: String!
     caption: String
  }
`;

const Insights = gql`
  type Insights{
    impressions: Int!
    profile_views: Int!
    reach: Int
    timestamp: Date
  }
`;

const Query = gql `
  type Query {
      getUserData: UserData
      getBusinessDiscoveryData: BusinessDiscoveryData
      getWebhooks: Webhooks
      getHashtaggedMediaData: HashtaggedMediaData
      getMediaPublishData: MediaPublishData
      getInsights: Insights
  }
`;

module.exports = [  AccessTokenResponse,
                    UserData,
                    BusinessDiscoveryData,
                    Webhooks,
                    HashtaggedMediaData,
                    MediaPublishData,
                    Insights,
                    Query
                ];