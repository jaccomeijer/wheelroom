/**
 * Component variation
 *
 * Component type: openerSection
 * Variation: Page opener
 *
 */

import React, { Fragment } from 'react'
import { getAllPaddingObject } from '../../styles/global-padding'
import { heading1Style } from '../../styles/heading'
import { paragraph2Style } from '../../styles/paragraph'
import { Box, Flex } from '../../views/core-elements/grid'
import { Heading } from '../../views/core-elements/heading'
import { Text } from '../../views/core-elements/text'
import { Image } from '../../views/image/image'
import { Navigation } from '../navigation'
import { OpenerSectionProps } from './opener-section'

export const OpenerSectionPageOpenerVar = (props: OpenerSectionProps) => {
  const image = props.image || props.page.pageImage
  const heading = props.heading || props.page.pageHeading
  const infoText =
    (props.infoText && props.infoText.infoText) ||
    (props.page.pageInfoText && props.page.pageInfoText.pageInfoText)

  return (
    <Fragment>
      <Box ncss={{ w: [1], height: [5, 5, 6, 6], position: 'relative' }}>
        <Box ncss={{ position: 'relative', h: '100%' }}>
          <Image image={image} objectFit="cover" height="100%" />
        </Box>
        <Box
          ncss={{
            ...getAllPaddingObject('textBox'),
            bottom: '50px',
            overflow: 'hidden',
            position: 'absolute',
            right: '20px',
            w: [7 / 8, 6 / 8, 4 / 8, 4 / 8],
          }}
        >
          <Heading ncss={heading1Style}>{heading}</Heading>
          <Text
            ncss={{
              ...paragraph2Style,
              color: 'darkGrey',
            }}
          >
            {infoText}
          </Text>
        </Box>
        <Flex
          ncss={{
            left: 0,
            position: 'absolute',
            top: 0,
            w: 1,
          }}
        >
          <Navigation routes={props.mainNavigation.routes} />
        </Flex>
      </Box>
    </Fragment>
  )
}
