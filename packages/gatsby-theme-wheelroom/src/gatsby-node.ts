import { buildNamedPaths } from './lib/build-named-paths'
import { createPages } from './lib/create-pages'
import { createSubPages } from './lib/create-sub-pages'
import { getPageContext } from './lib/get-page-context'
import { runQueries } from './lib/run-queries'

exports.createPages = async ({ graphql, actions }: any, options: any) => {
  const { createPage } = actions

  const queryResults = await runQueries(graphql, options.queries)
  const namedPaths = buildNamedPaths(
    queryResults,
    options.defaultLocale || 'en-US'
  )
  const pageTemplate = options.pageTemplate
  const pageContext = getPageContext(queryResults, namedPaths)

  createPages(
    createPage,
    pageContext,
    namedPaths,
    queryResults.page,
    pageTemplate
  )
  createSubPages(
    createPage,
    pageContext,
    namedPaths,
    queryResults.subPage,
    pageTemplate
  )
}
