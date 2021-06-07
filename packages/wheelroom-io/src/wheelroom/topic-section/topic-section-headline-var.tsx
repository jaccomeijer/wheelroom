/**
 * Component variation
 *
 * Component type: topicSection
 * Variation: Headline
 *
 */

import React from 'react'
import { getSectionWheel } from '@wheelroom/core'
import { getTopicOptions } from '../../lib/get-topic-options'
import { Topic } from '../topic/topic'
import { TopicModel } from '../topic/model'
import { TopicSectionModel } from './model'
import { TopicSectionWrapper } from './topic-section-wrapper'

export const TopicSectionHeadlineVar = (props: TopicSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.theme || props.activeThemeId,
    wheelId: 'topicSection',
    sectionWheels: props.sectionWheels,
    variation: 'headline',
  })

  if (!sectionWheel || !props.topics) {
    return null
  }
  const { data, wheel } = sectionWheel

  const topicHeading = props.index <= 1 ? 'h1' : 'h2'
  return (
    <TopicSectionWrapper containerStyle="container" wheel={wheel}>
      {props.topics.slice(0, 1).map((topic: TopicModel, index: number) => (
        <Topic
          data={data}
          key={index}
          topic={topic}
          topicOptions={getTopicOptions({
            optionStrings: props.topicOptions,
            locale: props.locale,
          })}
          useHeadingElement={topicHeading}
          wheel={{ ...wheel, style: wheel.style.topic }}
        />
      ))}
    </TopicSectionWrapper>
  )
}