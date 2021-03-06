module.exports = {
  siteMetadata: {
    title: `wilder.roses`,
    description: `we are the wilder.roses! Amanda, Henry, Stella and Sandwich.`,
    author: `@henryrose`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          
          "G-D3P7RP8K70",
          
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: 'gatsby-source-s3-image',
    //   options: {
    //     bucketName: 'images.wilder-roses.com',
    //     domain: 's3-us-west-2.amazonaws.com/', // [op ztional] Not necessary to define for AWS S3; defaults to `s3.amazonaws.com` s
    //     region: 'us-west-2',
    //     protocol: 'http', // [optional] Default to `https`.
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "wilder-roses.com",
        acl: null
      },
    },
  ],
  
}
