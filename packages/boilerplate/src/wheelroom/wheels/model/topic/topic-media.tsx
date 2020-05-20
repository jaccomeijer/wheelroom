import React from 'react'
import { Image } from '../../element/image'
import { Box } from '../../element/grid'
import { TopicProps } from '../../../../models/topic'
import { TopicInfo } from '../../../lib/get-topic-info'
import { PageSectionInfo } from '../../../lib/get-page-section-info'
import { Video } from '../../element/video'
import { Wheel } from '../../types'
import { TopicMediaWheelStyle } from './presets/topic-media-preset'
import { EmbedProps } from '../../../../models/embed'
import { Html } from '../../element/html'

export interface TopicMediaWheel extends Wheel {
  style: TopicMediaWheelStyle
}

export interface TopicMediaProps {
  /** Styling wheel */
  wheel: TopicMediaWheel
  /** All topic props */
  topic: TopicProps
  /** All embed props */
  embed: EmbedProps
  /** Topic info object */
  topicInfo: TopicInfo
  /** Page section info */
  pageSectionInfo: PageSectionInfo
}

export const TopicMedia = (props: TopicMediaProps) => {
  const pageSectionInfo = props.pageSectionInfo
  const topicOptions = pageSectionInfo.topicOptions
  return (
    <Box
      ncss={{
        order: topicOptions.reverseOrder ? 0 : null,
      }}
      wheel={props.wheel}
    >
      {props.topic.advancedMedia &&
        props.topic.advancedMedia
          .slice(0, 1)
          .map((embed: EmbedProps, index: number) => (
            <Html
              key={index}
              code={embed.code?.code}
              title={embed.title}
              type={embed.type}
              wheel={{ ...props.wheel, style: props.wheel.style.html }}
            />
          ))}
      {!props.topic.advancedMedia && props.topicInfo.hasImage && (
        <Image
          includeFigcaption={false}
          description={props.topic.media?.description}
          media={props.topic.media}
          wheel={{ ...props.wheel, style: props.wheel.style.image }}
          title={props.topic.media?.title}
        />
      )}
      {!props.topic.advancedMedia && props.topicInfo.hasVideo && (
        <Video
          includeTitle={false}
          includeDescription={false}
          description={props.topic.media?.description}
          media={props.topic.media}
          wheel={{ ...props.wheel, style: props.wheel.style.video }}
          title={props.topic.media?.title}
        />
      )}
    </Box>
  )
}
