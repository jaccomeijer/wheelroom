import { ContentfulEdge, QueryResults } from '../types/contentful'
import { PathNames } from '../types/named-paths'
import camelcase from 'camelcase'

interface BuildPathNames {
  /** Results from Contentful query */
  queryResults: QueryResults
  defaultLocale: string
}

const pathToCamelCase = (path: string): string => {
  if (path === '/') {
    return 'home'
  }
  return camelcase(path.split('/').join('-'))
}

export const buildPathNames = (context: BuildPathNames): PathNames => {
  console.log(`Building path names`)
  const pathNames: PathNames = {}

  const pagesByContentfulId = context.queryResults.page.page.reduce(
    (result: any, edge: ContentfulEdge) => {
      const page = edge.node
      result[page.contentful_id] = { [page.node_locale]: page }
      return result
    },
    {}
  )
  console.log('pagesByContentfulId', pagesByContentfulId)

  context.queryResults.page.page.forEach((edge: ContentfulEdge) => {
    const page = edge.node
    const defaultLocalePage =
      pagesByContentfulId[page.contentful_id][context.defaultLocale]
    const pathName = pathToCamelCase(defaultLocalePage.path)
    if (!(page.path in pathNames)) {
      pathNames[page.path] = pathName
    }
  })
  console.log('pathNames', pathNames)
  return pathNames
}
