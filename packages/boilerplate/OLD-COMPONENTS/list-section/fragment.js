/* eslint-disable prettier/prettier */
/**
 * Graphql fragment definition
 *
 * These fragments define the component fields. Gatsby resolves this file
 * by scanning the src folder, then adds the fragments to the main page query.
 *
 *
 * Component: listSection
 */

import { graphql } from 'gatsby'

export const fragment = graphql`
fragment ListSection on ContentfulListSection {
  heading
  listItems {
    navigationHeading
    pageHeading
    pageImage {
      title
      description
      fluid(maxWidth: 1024) {
        sizes
        src
        srcSet
      }
    }
    pageInfoText {
      pageInfoText
    }
    path
    pathName
    seoDescription
    seoTitle
    listItemHeading
    listItemHiddenText
    listItemImage {
      title
      description
      fluid(maxWidth: 1024) {
        sizes
        src
        srcSet
      }
    }
    listItemInfoText {
      listItemInfoText
    }
    listItemView
    __typename
    title
  }
  variation
  __typename
  title
}
`
