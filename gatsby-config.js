module.exports = {
  
  siteMetadata: {
    title: 'Kofi Lost',
    author: 'Fii Entertainment'
  },


    plugins: [

      {resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

      'gatsby-plugin-react-helmet',
      `gatsby-plugin-sass`,
      'gatsby-plugin-styled-components',
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-remark-relative-images`,
      
      
        {resolve: `gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/src`,
            name: `src`,
          },

        },
    
    { resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'kofilost.com',
          protocol: "https",
        hostname: "www.kofilost.com",
      },
  },


    { resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', 
      },
    },

       {resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
              ],
              services: {
              },
            }
          },

         {resolve: `gatsby-remark-images`,
           options: {
             maxwidth: 750,
             linkImagesToOriginal: false
           },
         }
        ]
      }
    },
  ]
}

