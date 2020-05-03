const path = require(`path`)

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type IlluminatorDataJson implements Node {
      name: String
      title: String
      size: String
      year: Int
      description: String
      imageNames: [String]
      images: [ImageSharp]
    }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const illuminatorTemplate = path.resolve(
    `src/components/illuminator-item.jsx`
  )
  const result = await graphql(`
    query loadIlluminator {
      allIlluminatorDataJson {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }

  result.data.allIlluminatorDataJson.edges.forEach(({ node }) => {
    createPage({
      path: `illuminator/${node.name}`,
      component: illuminatorTemplate,
      context: {
        name: node.name,
      },
    })
  })
}

const imagesQuery = {
  query: {
    filter: {
      images: {
        elemMatch: {
          id: {
            ne: null,
          },
        },
      },
    },
  },
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    IlluminatorDataJson: {
      images: {
        type: "[ImageSharp]",
        resolve(source, args, context) {
          return context.nodeModel.runQuery({
            query: {
              filter: {
                fixed: {
                  originalName: {
                    in: [source.name + ".png", source.name + "-1.png", source.name + "-2.png"],
                  },
                },
              },
            },
            type: "ImageSharp",
            firstOnly: false,
          })
        },
      },
      firstImage: {
        type: "ImageSharp",
        resolve(source, args, context) {
          return context.nodeModel.runQuery({
            query: {
              filter: {
                fixed: {
                  originalName: { in: [source.name + "-1.png"] },
                },
              },
            },
            type: "ImageSharp",
            firstOnly: true,
          })
        },
      },
      nextItemName: {
        type: "String",
        async resolve(source, args, context, info) {
          const allItems = await context.nodeModel.runQuery({
            type: "IlluminatorDataJson",
            ...imagesQuery,
            firstOnly: false,
          })
          const currentIndex = allItems.indexOf(source)
          const nextIndex =
            currentIndex < allItems.length - 1 ? currentIndex + 1 : 0
          const nextItem = allItems[nextIndex]
          return nextItem && allItems[nextIndex].name
        },
      },
      previousItemName: {
        type: "String",
        async resolve(source, args, context, info) {
          const allItems = await context.nodeModel.runQuery({
            type: "IlluminatorDataJson",
            ...imagesQuery,
            firstOnly: false,
          })
          const currentIndex = allItems.indexOf(source)
          const previousIndex =
            currentIndex == 0 ? allItems.length - 1 : currentIndex - 1
          const previousItem = allItems[previousIndex]
          return previousItem && previousItem.name
        },
      },
    },
  }
  createResolvers(resolvers)
}
