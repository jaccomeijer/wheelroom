import React, { Fragment } from 'react'
import { Box, ContainerMaxWidth } from '../../../core/elements/grid'
import { TopicProps, Topic } from '../../topic'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../page-section'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../../../core/styles/image'
import {
  commonVideoDescriptionStyle,
  commonVideoStyle,
} from '../../../core/styles/video'

export const FeaturedListDisplay = (props: {
  pageSection: PageSectionProps
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  const topicOptions = pageSectionInfo.topicOptions
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const featuredList = props.pageSection.topics.map(
    (topic: TopicProps, index: number) => (
      <Topic
        key={index}
        {...topic}
        pageSectionActions={props.pageSection.actions}
        pageSectionInfo={pageSectionInfo}
        fullTopicAsLink={true}
        topicWrapperStyle={{
          flexDirection: topicOptions.hideMedia
            ? ['column', 'row']
            : ['column', 'row'],
          w: topicOptions.hideMedia ? [1, 1 / 2, 1 / 3] : 1,
        }}
        mediaWrapperStyle={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'normal',
          w: [1 / 3, 1 / 4, 1 / 4],
          p: 3,
        }}
        mediaProps={{
          styleTree: {
            img: commonImageImgStyle,
            picture: commonImagePictureStyle,
            figcaption: commonImageFigcaptionStyle,
            description: commonVideoDescriptionStyle,
            video: commonVideoStyle,
          },
        }}
        contentWrapperStyle={{
          display: 'flex',
          flexDirection: 'column',
          w: [1, 2 / 3, 3 / 4],
          p: 3,
        }}
        actionWrapperStyle={{
          display: 'flex',
        }}
      />
    )
  )
  return (
    <Fragment>
      <Box
        is="div"
        ncss={{
          label: 'wrapper',
          bg: 'bg',
          py: [3, 6, 8],
        }}
      >
        <ContainerMaxWidth
          ncss={{
            flexDirection: topicOptions.hideMedia
              ? ['column', 'row']
              : ['column'],
          }}
        >
          {featuredList}
        </ContainerMaxWidth>
      </Box>
    </Fragment>
  )
}
