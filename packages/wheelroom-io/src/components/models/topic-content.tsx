import { AnyProps, Div } from '@wheelroom/any/react'
import { mediaQuery } from '../../lib/media-query'
import { ContentfulAction } from '../models/contentful-action'
import {
  TopicSectionOptions,
  TopicSectionVariant,
} from './contentful-topic-section'
import { TopicActions } from './topic-actions'
import { TopicText } from './topic-text'

export type TopicContent = {
  contentfulActions?: ContentfulAction[]
  abstractString?: string
  headingString?: string
}

type AnyDivProps = AnyProps['div']
export interface TopicContentProps extends AnyDivProps {
  model?: TopicContent
  options?: TopicSectionOptions
  variant?: TopicSectionVariant
}

const baseStyle = {
  display: 'flex',
  flex: '1',
  flexDirection: 'column',
  ':only-of-type': {},
}

const styleMap: Partial<Record<TopicSectionVariant, any>> = {
  block: { ...baseStyle, padding: '16px' },
  card: { ...baseStyle, flex: '1 1 auto', color: 'grey', padding: '16px' },
  featured: {
    padding: '16px',
    maxWidth: ['35em', '35em', '45%'],
    width: '100%',
  },
  headline: {
    textAlign: 'center',
    margin: '0 auto',
    padding: '16px 32px',
    maxWidth: ['100%', '48em'],
  },
  gallery: { padding: '16px' },
  hero: {
    maxWidth: '80em',
    margin: '0 auto',
    padding: ['48px 24px', '56px 32px', '72px 40px', '88px 40px'],
    width: '100%',
  },
  quote: {
    textAlign: 'center',
    padding: '16px',
    maxWidth: ['100%', '60em', '68em'],
    margin: '0 auto',
  },
  showcase: { ...baseStyle, padding: '16px' },
  video: { ...baseStyle, padding: '16px' },
}

export const topicContentStyleFactory = (args: {
  variant?: TopicSectionVariant
  options?: TopicSectionOptions
}) => {
  const useVariant = args.variant || 'block'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const TopicContent = ({
  model,
  options,
  variant,
  ...props
}: TopicContentProps) => {
  const css: any = topicContentStyleFactory({
    options,
    variant,
  })
  model = model || {}

  return (
    <Div css={css} {...props}>
      <TopicText variant={variant} model={model} options={options} />
      <TopicActions
        variant={variant}
        model={{ contentfulActions: model.contentfulActions }}
        options={options}
      />
    </Div>
  )
}