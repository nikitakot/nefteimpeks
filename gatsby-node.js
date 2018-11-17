/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const locales = require('./src/constants/locales')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).forEach(lang => {
      const localizedPath = locales[lang].path + page.path
      if (locales[lang].default) {
        createPage({
          ...page,
          path: localizedPath,
          context: {
            locale: lang,
          },
        })
        createPage({
          ...page,
          path: page.path,
          context: {
            locale: lang,
          },
        })
      } else {
        createPage({
          ...page,
          path: localizedPath,
          context: {
            locale: lang,
          },
        })
      }
    })

    resolve()
  })
}