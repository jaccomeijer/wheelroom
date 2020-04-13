/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Gallery
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../wheelroom/lib/not-implemented'
import { getPageSectionInfo } from '../../wheelroom/lib/get-page-section-info'
import { PageSectionUnicorn } from '../../wheelroom/wheels/page-section/unicorn/page-section-unicorn'
import { deepMerge } from '../../wheelroom/lib/deep-merge'
import { topicPreset } from '../../wheelroom/wheels/topic/presets/topic-preset'
import { Wheel } from '../../wheelroom/wheels/types'
import { elementPresets } from '../../themes/yosemite/element-presets'
import { yosemiteLight } from '../../themes/yosemite/yosemite-light'
import { styledSystemConfig } from '../../themes/yosemite/styled-system-config'
import { pageSectionGalleryPreset } from '../../wheelroom/wheels/page-section/gallery/page-section-gallery-preset'

export const PageSectionGalleryVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props, {
    hideAbstract: true,
    hideHeading: true,
    hideIcon: true,
  })

  const style = deepMerge(
    { topic: topicPreset },
    { ...pageSectionGalleryPreset }
  )
  const wheel: Wheel = {
    style,
    elementPresets,
    theme: yosemiteLight,
    styledSystemConfig,
  }

  if (pageSectionInfo.hasTopic) {
    return (
      <PageSectionUnicorn
        topicProps={{
          pageSectionActions: props.actions,
          pageSectionInfo,
          wheel,
        }}
        containerStyle="fluid"
        pageSection={props}
        wheel={wheel}
      />
    )
  }
  return <NotImplemented pageSection={props} wheel={wheel} />
}
