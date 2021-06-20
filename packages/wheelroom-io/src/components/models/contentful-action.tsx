import { graphql } from 'gatsby'
import { IconVariant } from '../elements/icon'
import { ContentfulPage } from './contentful-page'

export type ContentfulAction = {
  sys?: {
    id: string
  }
  anchor?: string
  description?: string
  eventId?: string
  heading?: string
  icon?: IconVariant
  page?: ContentfulPage
  query?: string
  url?: string
}

export const actionFragment = graphql`
  fragment Action on Contentful_Action {
    sys {
      id
    }
    description
    anchor
    eventId
    heading
    icon
    page {
      path
    }
    query
    url
  }
`
