import React, { Fragment, useContext, useRef, useState } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { ALink } from '../../../elements/a-link'
import { Box, Container, Flex, Fluid, Wrapper } from '../../../elements/grid'
import { BrandNavigationSegment } from '../../navigation-segment/brand-navigation-segment'
import { Button } from '../../../elements/button'
import { getThemeSwitcherStore } from '@wheelroom/admin-theme-switcher'
import { GlobalsProps } from '../../globals/model-types'
import { Modal } from './modal'
import { NavigationHeaderWheelStyle } from './presets/navigation-header-preset'
import { NavigationProps } from '../../navigation/model-types'
import { NavigationSegment } from '../../navigation-segment/navigation-segment'
import { NavigationSegmentProps } from '../../navigation-segment/model-types'
import { ThemeButton } from './theme-button'
import { Wheel } from '../../../types/wheel'

interface NavigationHeaderWheel extends Wheel {
  style: NavigationHeaderWheelStyle
}

export interface NavigationHeaderWheelProps {
  containerStyle: 'container' | 'fluid'
  globals: GlobalsProps
  hideThemeButton?: boolean
  navigation: NavigationProps[]
  useLogoElement?: JSX.Element
  wheel: NavigationHeaderWheel
}

const getNavSegments = (navigation: NavigationProps[], variation: string) => {
  const nav = navigation.find(
    (nav: NavigationProps) => nav.variation === variation
  )
  if (!nav || !nav.segments || !Array.isArray(nav.segments)) {
    return [] as NavigationSegmentProps[]
  }
  return nav.segments
}

export const NavigationHeader = (props: NavigationHeaderWheelProps) => {
  // Theme switcher admin module
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  const setActiveTheme = themeSwitcherStore?.actions.setActiveTheme
  const activeThemeId = themeSwitcherStore?.state.activeThemeId
  const [menuVisible, setMenuVisible] = useState(false)
  const buttonRef = useRef(null)

  if (!Array.isArray(props.navigation) || props.navigation.length < 1) {
    return null
  }

  const actionsSegments = getNavSegments(props.navigation, 'actions')
  const brandSegments = getNavSegments(props.navigation, 'brand')
  const menuSegments = getNavSegments(props.navigation, 'menu')

  const toggleTheme = () => {
    setActiveTheme(activeThemeId === 'light' ? 'dark' : 'light')
  }

  const openMenu = () => {
    setMenuVisible(true)
  }

  const closeMenu = () => {
    setMenuVisible(false)
    const element: HTMLElement = buttonRef.current!
    element.focus()
  }

  const ContainerType = props.containerStyle === 'container' ? Container : Fluid
  return (
    <Fragment>
      <ALink
        href="#content"
        wheel={{ ...props.wheel, style: props.wheel.style.skipToContent }}
      >
        {props.globals.skipToContentHeading}
      </ALink>
      <Wrapper wheel={{ ...props.wheel, style: props.wheel.style.wrapper }}>
        <ContainerType
          wheel={{ ...props.wheel, style: props.wheel.style.container }}
        >
          <BrandNavigationSegment
            logoElement={props.useLogoElement}
            siteHeading={props.globals.siteHeading}
            navigationSegment={brandSegments}
            wheel={{
              ...props.wheel,
              style: props.wheel.style.brand.segment,
            }}
          />
          <Flex
            is={'nav'}
            wheel={{ ...props.wheel, style: props.wheel.style.menu }}
          >
            <NavigationSegment
              hideActionHeading={false}
              hideActionIcon={false}
              hideSegmentHeading={true}
              maxSegments={1}
              navigationSegment={menuSegments}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.menu.segment,
              }}
            />
          </Flex>
          <Flex
            is="div"
            wheel={{ ...props.wheel, style: props.wheel.style.actions }}
          >
            <NavigationSegment
              hideActionHeading={false}
              hideActionIcon={true}
              hideSegmentHeading={true}
              maxSegments={1}
              navigationSegment={actionsSegments}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.actions.segment,
              }}
            />
            <ThemeButton
              wheel={{
                ...props.wheel,
                style: props.wheel.style.actions.themeButton,
              }}
              activeThemeId={activeThemeId}
              hideThemeButton={props.hideThemeButton}
              toggleTheme={toggleTheme}
            />
          </Flex>
          <Box
            is="div"
            wheel={{ ...props.wheel, style: props.wheel.style.modal }}
          >
            <Button
              id="modal-dialog"
              ariaExpanded={menuVisible}
              ariaPressed={menuVisible}
              ariaControls="header-navigation"
              ariaLabel="Open navigation"
              value=""
              role="button"
              ref={buttonRef}
              onClick={() => openMenu()}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.modal.button,
              }}
            >
              Menu
            </Button>
            <Modal
              menuSegments={menuSegments}
              actionsSegments={actionsSegments}
              activeThemeId={activeThemeId}
              closeMenu={closeMenu}
              hideThemeButton={props.hideThemeButton}
              menuVisible={menuVisible}
              wheel={{
                ...props.wheel,
                style: props.wheel.style.modal.dialog,
              }}
              toggleTheme={toggleTheme}
            />
          </Box>
        </ContainerType>
      </Wrapper>
    </Fragment>
  )
}
