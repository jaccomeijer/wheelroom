import { mediaQuery } from '../../../lib/media-query'
import { TopicMediaVariant } from './topic-media-variants'

export interface TopicVariantStyle {
  variant?: TopicMediaVariant
}

const baseStyle = {
  label: 'topic-media',
}

export const topicMediaVariantStyle = (args: TopicVariantStyle) => {
  let style = {}
  switch (args.variant) {
    case 'myVar':
      style = {
        ...baseStyle,
      }
      break
    default:
      style = baseStyle
      break
  }
  return mediaQuery(style)
}
