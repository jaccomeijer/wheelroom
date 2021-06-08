import { mediaQuery } from '../../lib/media-query'
import { TopicVariant } from '../topic/topic-variants'

export interface TopicSectionVariantStyle {
  variant: TopicVariant
}

const baseStyle = {
  display: 'flex',
  width: '100%',
  label: 'topicSection',
  flexDirection: 'column',
  paddingBottom: '16px',
}
const maxWidthStyle = {
  ...baseStyle,
  maxWidth: '1280px',
  margin: 'auto 0',
}

export const getTopicSectionVariantStyle = (args: TopicSectionVariantStyle) => {
  let style = {}
  switch (args.variant) {
    case 'block':
      style = {
        ...maxWidthStyle,
        alignItems: ['center', 'initial'],
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
      }
      break
    case 'card':
      style = {
        ...maxWidthStyle,
        alignItems: 'stretch',
        flexDirection: 'row',
        flexFlow: 'row wrap',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }
      break
    case 'divider':
      style = {
        ...maxWidthStyle,
        margin: '1rem 0',
        color: 'inherit',
        backgroundColor: 'grey',
        border: 0,
        opacity: '0.25',
        height: '1px',
      }
      break
    case 'gallery':
      style = {
        ...maxWidthStyle,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      }
      break
    case 'hero':
      style = { ...baseStyle, paddingBottom: '0' }
      break
    case 'image':
      style = {
        ...maxWidthStyle,
        flexDirection: ['column', 'row'],
      }
      break
    case 'quote':
      style = {
        paddingBottom: '40px',
      }
      break
    case 'showcase':
      style = {
        ...maxWidthStyle,
        alignItems: ['center', 'baseline'],
        justifyContent: 'center',
        maxWidth: ['35em', '54rem'],
      }
      break
    default:
      style = maxWidthStyle
      break
  }
  return mediaQuery(style)
}