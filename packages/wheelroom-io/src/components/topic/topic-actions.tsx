import { Div } from '@wheelroom/any/react'
import { mediaQuery } from '../../lib/media-query'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
} from '../../lib/component-styles'
import { ActionButton } from '../models/action-button'
import { ActionLink } from '../models/action-link'
import { ContentfulAction } from '../models/contentful-action'
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from './contentful-topic-section'

export type TopicActions = {
  contentfulActions?: ContentfulAction[]
}
export type TopicActionsProps = ComponentProps<
  TopicActions,
  TopicSectionVariant,
  TopicSectionOptions
>['div']

const styleMap: StyleMap<TopicSectionVariant> = {
  block: {
    flex: 0,
    marginTop: 16,
  },
  card: {
    marginTop: 16,
  },
  featured: {
    marginTop: ['24px', '24px', '32px'],
  },
  headline: {
    marginTop: 16,
  },
  hero: {
    marginTop: 32,
    maxWidth: '30em',
  },
  quote: {
    marginTop: 64,
  },
  showcase: {
    marginTop: 16,
  },
  divider: {},
  gallery: {},
  image: {},
  navigation: {},
  text: {},
  video: {},
}

export const topicActionsStyleFactory: StyleFactory<
  TopicSectionVariant,
  TopicSectionOptions
> = (args) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const TopicActions = ({
  model,
  options,
  variant,
  ...props
}: TopicActionsProps) => {
  const isDisplay = ['featured', 'headline', 'hero', 'quote'].includes(
    variant || 'block'
  )
  const isLink = ['gallery', 'image', 'showcase'].includes(variant || 'block')

  const css = topicActionsStyleFactory({
    options,
    variant,
  })
  model = model || {}

  return (
    <Div css={css} {...props}>
      {model.contentfulActions?.map((contentfulAction: ContentfulAction) =>
        isLink ? (
          <ActionLink
            key={contentfulAction.sys?.id}
            model={{ contentfulAction }}
            variant="link"
          />
        ) : (
          <ActionButton
            key={contentfulAction.sys?.id}
            model={{ contentfulAction }}
            variant={isDisplay ? 'display' : 'primary'}
          />
        )
      )}
    </Div>
  )
}
