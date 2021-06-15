import { graphql } from 'gatsby'
import { Embed } from '../embed/embed'
import { ContentfulAction } from '../action/contentful-action'
import { ContentfulAsset } from '../asset/contentful-asset'

export type ContentfulTopic = {
  sys?: {
    id: string
  }
  abstract?: string
  actionsCollection?: {
    items: ContentfulAction[]
  }
  heading?: string
  icon?: string
  media?: ContentfulAsset
  mediaEmbed?: Embed
  poster?: ContentfulAsset
}

export const topicFragment = graphql`
  fragment Topic on Contentful_Topic {
    sys {
      id
    }
    heading
    abstract
    icon
    actionsCollection(limit: 1) {
      items {
        ...Action
      }
    }
    mediaCollection(limit: 4) {
      items {
        ...Asset
      }
    }
    mediaEmbed {
      ...Embed
    }
    poster {
      ...Asset
    }
  }
`
