import { Div } from '@wheelroom/any/elements'
import { Abstract } from '../typography/abstract'
import { Heading } from '../typography/heading'
import { TopicOptions } from './topic-options'
import { TopicVariantMap } from './topic-variants'
import { topicTextVariantStyle } from './topic-text-variant-style'

export type TopicText = {
  abstract: string
  heading: string
}

export interface TopicTextProps {
  model: TopicText
  options: TopicOptions
  variantMap: TopicVariantMap
}

export const TopicText = (props: TopicTextProps) => {
  return (
    <Div css={topicTextVariantStyle({ variant: props.variantMap.topicText })}>
      <Heading is="h3">{props.model.heading}</Heading>
      <Abstract>{props.model.abstract}</Abstract>
    </Div>
  )
}