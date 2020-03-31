import React, { Fragment } from 'react'
import { Box, Container } from '../elements/grid'
import { Topic, TopicProps } from '../../components/topic'
import { getPageSectionInfo } from '../lib/get-page-section-info'
import { PageSectionProps } from '../../components/page-section/page-section'
import { TopicStyleTree } from '../views/topic/core-topic'
import { NcssProps } from '../elements/types'

export interface ImageDisplayStyleTree {
  topic: TopicStyleTree
  wrapper: NcssProps
  container: NcssProps
}

export const ImageDisplay = (props: {
  pageSection: PageSectionProps
  styleTree: ImageDisplayStyleTree
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const styleTree = props.styleTree || {}
  return (
    <Fragment>
      <Box is="div" ncss={styleTree.wrapper}>
        <Container ncss={styleTree.container}>
          {props.pageSection.topics
            .slice(0, 2)
            .map((topic: TopicProps, index: number) => (
              <Topic
                {...topic}
                key={index}
                pageSectionActions={props.pageSection.actions}
                pageSectionInfo={pageSectionInfo}
                useHeadingElement="h4"
                styleTree={styleTree.topic}
              />
            ))}
        </Container>
      </Box>
    </Fragment>
  )
}
