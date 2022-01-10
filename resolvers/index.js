const { getUserData,
        getBusinessDiscoveryData,
        getWebhooks,
        getHashtaggedMediaData,
        getMediaPublishData,
        getInsights, } = require ("./instagram");


 const Query = {
     Query: {
         getUserData: () => getUserData(),
         getBusinessDiscoveryData: () => getBusinessDiscoveryData(),
         getWebhooks: () => getWebhooks(),
         getHashtaggedMediaData: () => getHashtaggedMediaData(),
         getMediaPublishData: () => getMediaPublishData(),
         getInsights: () => getInsights(),
         },
 };

module.exports = Query;