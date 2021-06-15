import { Div } from '@wheelroom/any/elements'
import { CSSObject, Global } from '@emotion/react'
import { globalReset } from '@wheelroom/any/resets'
import { graphql, PageProps } from 'gatsby'
import { GlobalsProvider } from '../../lib/globals-provider'
import { ContentfulGlobals } from '../globals/contentful-globals'
import { Sections } from './sections'
import { ContentfulPage } from './contentful-page'

// export type Page = {
//   page?: ContentfulPage
// }

export const fontStyle: CSSObject = {
  fontFamily: `-apple-system, BlinkMacSystemFont,
  “Segoe UI”, “Roboto”, “Oxygen”,
  “Ubuntu”, “Cantarell”, “Fira Sans”,
  “Droid Sans”, “Helvetica Neue”, sans-serif`,
}

export type PageQuery = {
  contentful: {
    page: ContentfulPage
    globals: ContentfulGlobals
  }
  site: unknown
}

export interface PageContext {
  pageId: string
  pagePath: string
}

const Page = (props: PageProps<PageQuery, PageContext>) => {
  const page = props.data.contentful.page
  const globals = props.data.contentful.globals
  const site = props.data.site
  console.log('pageId', props.pageContext.pageId)
  return (
    <GlobalsProvider value={{ globals, site }}>
      <Global styles={globalReset} />
      <Div css={fontStyle}>
        <Sections model={{ sections: page.sectionsCollection.items }} />
      </Div>
    </GlobalsProvider>
  )
}
export default Page

export const queryId = graphql`
  query ($pageId: String!, $globalsId: String!) {
    contentful {
      page(id: $pageId) {
        ...Page
      }
      globals(id: $globalsId) {
        ...Globals
      }
    }
    site {
      ...GatsbySite
    }
  }
`
