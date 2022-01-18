### INSTAGRAM GRAPH API

#### Implementing Instagram Graph API using Nodejs

Instagram is termed as a social media platform which incorporates the sharing of video and photos through it. It was founded in October 2010 but it was then bought over by Facebook Inc. in April 2012 whereby it also increased in its popularity throughout the world.

An API (Application Programming Interface) is an intermediary between two software applications that enables them to communicate.

Instagram Graph API enables software developers to integrate the functionality of publishing their media

### Goals

In this article, we will integrate the Instagram Graph API to a Node.js GraphQL API.

### Prerequisites

To follow along in this article, it is helpful to have the following:

- [Node.js] (https://nodejs.org/en/) installed on your computer.
- Some basic knowledge working with JavaScript.
  Working knowledge with [GraphQL](https://graphql.org/).
- A text editor installed.

### Overview

- [Creating a Facebook developer account](#creating-a-facebook-developer-account)
- [Creating an app](#creating-an-app)
- [Adding an Instagram test user](#adding-an-instagram-test-user)
- [Setting up the project](#setting-up-the-project)

- [Installing the necessary dependencies](#installing-the-necessary-dependencies)

- [Getting the authorization code](#getting-the-authorization-code)

- [Getting user profile data](#getting-user-profile-data)

- [Getting basic data about other Instagram Business users](#getting- basic-data-about-other-Instagram-Business-users)

- [Getting comments and their replies](#getting-comments-and-their-replies)

- [Getting comments and their replies](#getting-comments-and-their-replies)

- [Getting media and profile interactions](#getting-media-and-profile-interactions)

- [Getting hashtagged media](#getting-hashtagged-media)

- [Getting @mentions](#getting-@mentions)

- [Publishing media](#publishing-media)

### Creating a Facebook developer account

- To create a Facebook developer account, follow the following steps:

- Visit the [Facebook developer page](https://developers.facebook.com/) and on the right side, click [Login](https://www.facebook.com/login).

- In the resulting page, key in your credentials and click _Log In_.

- After signing in, you will be directed to your [dashboard page](https://developers.facebook.com/apps).

### Setting up the development server

#### Getting an authorization code

For us to use the API, the first step is to get the authorization code. It provides an authentication mechanism to the Instagram API.

To get an authorization code, we follow the following steps:

- Start with getting our application's credentials. To do this, go to your dashboard page. On the left sidebar to the bottom, click on _Settings_ and then _Basic_.

- In the resulting page, scroll down to find the _Instagram App ID_, and _Instagram App Secret_, copy them and paste them appropriately to the `.env` file in the root of the project. Your `.env` file should be similar to:

#### Getting user data

On an Instagram account, we can be able to get the user data of that specific account. The user data here involves the _caption_, _id_, _media count_, _media url_, _permalink_, _thumbnail url_, _timestamp_ and _username_.

To implement the above functionality, we will follow the following steps:

- Add its schema definition in `index.js`:

  ```js
  const UserData = gql`
    type UserData {
        }
  `;
  ```

  - From above, we are setting our response to contain the _caption_, _id_, _media count_, _media url_, _permalink_, _thumbnail url_, _timestamp_ and _username_. since it is what we want to get.

- Add the method of getting profile data to the Query object:

  ```js
  const Query = gql`
    type Query {
            }
  `;
  ```

- Add the schema defined above to the exported array:
  ```js
  module.exports = [
    AccessTokenResponse,
    Query,
  ];
  ```

  - After defining the schema, we set up the function for getting the profile data from the API in the `resolvers/Instagram.js` file as follows:

  ```js
  // getting profile data
  async function getUserData() {

    return response;
  }
  ```
  From above, we are: