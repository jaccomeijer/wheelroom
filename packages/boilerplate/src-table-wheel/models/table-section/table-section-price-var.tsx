/**
 * Component variation
 *
 * Component type: tableSection
 * Variation: Table
 *
 */

import React from 'react'
import { ScrollSpy, getWheel } from '../../../src-core'
import { TableSection } from './table-section-wheel'
import { TableSectionProps } from './model-types'

export const TableSectionPriceVar = (props: TableSectionProps) => {
  const wheel = getWheel({
    themeId: props.activeThemeId,
    wheelId: 'tableSection',
    sectionWheels: props.sectionWheels,
    variation: 'price',
  })

  if (!wheel || !props.tables) {
    return null
  }

  return (
    <ScrollSpy
      eventId={props.eventId}
      siteEmbeds={props.globals.siteEmbeds || []}
      sectionProps={props}
    >
      <TableSection
        containerStyle="container"
        tables={props.tables}
        topicOptions={props.topicOptions || {}}
        wheel={wheel}
      />
    </ScrollSpy>
  )
}
