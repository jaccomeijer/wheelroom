import React from 'react'
import { Box, ContainerMaxWidth } from '../../elements/grid'
import { PageSectionProps } from '../../../models/page-section/page-section'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { Topic } from '../../../models/topic'
import { TopicStyleTree } from '../topic/core-topic'
import { NcssProps } from '../../elements/types'

export interface BlockTreeStyle {
  topic: TopicStyleTree
  wrapper: NcssProps
  container: NcssProps
}

export const BlockTree = (props: {
  pageSection: PageSectionProps
  treeStyle: BlockTreeStyle
}) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasTopic) {
    return null
  }
  const treeStyle = props.treeStyle || {}

  return (
    <Box is="div" ncss={treeStyle.wrapper}>
      <ContainerMaxWidth ncss={treeStyle.container}>
        {props.pageSection.topics.map((topic, index) => (
          <Topic
            key={index}
            {...topic}
            pageSectionActions={props.pageSection.actions}
            pageSectionInfo={pageSectionInfo}
            fullTopicAsLink={false}
            treeStyle={treeStyle.topic}
          />
        ))}
      </ContainerMaxWidth>
    </Box>
  )
}
