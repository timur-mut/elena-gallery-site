module.exports = {
  pathPrefix: "/elena-gallery-site",
  siteMetadata: {
    title: "Elena gallery website.",
    description: "No description.",
    author: "timur-mut",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-transition-link",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "gallery-images",
        path: `${__dirname}/src/gallery-images/`,
      },
    },
  ],
}
