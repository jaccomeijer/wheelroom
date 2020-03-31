import React, { Fragment } from 'react'
import { Box, ContainerMaxWidth } from '../primary/grid'
import { Topic } from '../../../components/topic'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { PageSectionProps } from '../../../components/page-section/page-section'
import { defaultHeading1Style } from '../../styles/heading'
import { paragraphHeroStyle } from '../../styles/paragraph'
import {
  commonImageImgStyle,
  commonImagePictureStyle,
  commonImageFigcaptionStyle,
} from '../../styles/image'
import { commonVideoDescriptionStyle, commonVideoStyle } from '../../styles/video'

export const HeadlineDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const topic = props.pageSection.topics[0]
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
        <ContainerMaxWidth>
          <Topic
            {...topic}
            pageSectionActions={props.pageSection.actions}
            pageSectionInfo={pageSectionInfo}
            topicWrapperStyle={{
              w: 1,
            }}
            mediaProps={{
              styleTree: {
                img: commonImageImgStyle,
                picture: {
                  ...commonImagePictureStyle,
                  display: 'block',
                  px: 0,
                  py: 3,
                },
                figcaption: commonImageFigcaptionStyle,
                description: commonVideoDescriptionStyle,
                video: commonVideoStyle,
              },
            }}
            contentWrapperStyle={{
              display: 'flex',
              textAlign: 'center',
              flexDirection: 'column',
            }}
            useHeadingElement={pageSectionInfo.index <= 1 ? 'h1' : 'h2'}
            headingStyle={{ ...defaultHeading1Style }}
            paragraphStyle={{ ...paragraphHeroStyle, color: 'text' }}
            actionWrapperStyle={{
              mx: 'auto',
            }}
            actionStyle={{
              mx: 2,
              fontSize: [5, 6],
              lineHeight: [3, 4],
            }}
          />
        </ContainerMaxWidth>
      </Box>
    </Fragment>
  )
}