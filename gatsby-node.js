const { create } = require("domain")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const serviceTemplate = path.resolve("./src/templates/service.js")

  return graphql(`
    {
      wordpress {
        servicios {
          nodes {
            slug
            title
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors

    const servicios = result.data.wordpress.servicios.nodes

    servicios.forEach(servicio => {
      createPage({
        path: `/servicio/${servicio.slug}`,
        component: serviceTemplate,
        context: {
          servicio: servicio,
        },
      })
    })
  })
}
