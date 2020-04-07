import React, { Fragment, useContext, useState, useRef } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { ALink } from '../../../elements/a-link'
import { Box, Container, Flex } from '../../../elements/grid'
import { Button } from '../../../elements/button'
import { getThemeSwitcherStore } from '@wheelroom/admin-theme-switcher'
import { NavigationSegmentProps } from '../../../../models/navigation-segment'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'
import { PageSectionProps } from '../../../../models/page-section/page-section'
import { NcssProps } from '../../../elements/types'
import { NavListTreeStyle, NavList } from './nav-list'
import { NavLogo, NavLogoTreeStyle } from './nav-logo'
import { NavActionsTreeStyle, NavActions } from './nav-actions'
import { NavDialogTreeStyle, NavDialog } from './nav-dialog'

export interface PageSectionNavigationHeaderTreeStyle {
  skipToContent: NcssProps
  wrapper: NcssProps
  container: NcssProps
  menu: {
    nav: NcssProps
    navLogo: NavLogoTreeStyle
    navList: NavListTreeStyle
    navActions: NavActionsTreeStyle
    modalDialog: {
      container: NcssProps
      openMenuButton: NcssProps
      navDialog: NavDialogTreeStyle
    }
  }
}

export const PageSectionNavigationHeaderTree = (props: {
  pageSection: PageSectionProps
  treeStyle: PageSectionNavigationHeaderTreeStyle
}) => {
  /** Theme switcher admin module */
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  const setActiveTheme = themeSwitcherStore?.actions.setActiveTheme
  const activeThemeId = themeSwitcherStore?.state.activeThemeId
  const [menuVisible, setMenuVisible] = useState(false)
  const buttonRef = useRef(null)

  const action = props.pageSection.actions && props.pageSection.actions[0]

  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  if (!pageSectionInfo.hasNavigation) {
    return null
  }
  const globals = props.pageSection.globals
  const siteMetadata = props.pageSection.siteMetadata
  const treeStyle = props.treeStyle || {}
  const navSegment = props.pageSection.navigation
    .segments[0] as NavigationSegmentProps

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

  return (
    <Fragment>
      <ALink href="#content" ncss={treeStyle.skipToContent}>
        {`Skip to ` + globals.siteHeading + ` Content`}
      </ALink>
      <Box is="div" ncss={treeStyle.wrapper}>
        <Container ncss={treeStyle.container}>
          <NavLogo
            globals={globals}
            siteMetadata={siteMetadata}
            treeStyle={treeStyle.menu.navLogo}
          />
          <Flex is={'nav'} ncss={treeStyle.menu.nav}>
            <NavList
              treeStyle={treeStyle.menu.navList}
              pages={navSegment.pages}
            />
            <NavActions
              action={action}
              activeThemeId={activeThemeId}
              pageSectionInfo={pageSectionInfo}
              treeStyle={treeStyle.menu.navActions}
              toggleTheme={toggleTheme}
            />
          </Flex>
          <Flex is="div" ncss={treeStyle.menu.modalDialog.container}>
            <Button
              id="modal-dialog"
              ariaExpanded={menuVisible}
              ariaPressed={menuVisible}
              ariaControls="header-navigation"
              ariaLabel="Open header navigation"
              value=""
              role="button"
              ncss={treeStyle.menu.modalDialog.openMenuButton}
              ref={buttonRef}
              onClick={() => openMenu()}
            >
              Menu
            </Button>
            <NavDialog
              action={action}
              activeThemeId={activeThemeId}
              closeMenu={closeMenu}
              menuVisible={menuVisible}
              pages={navSegment.pages}
              pageSectionInfo={pageSectionInfo}
              treeStyle={treeStyle.menu.modalDialog.navDialog}
              toggleTheme={toggleTheme}
            />
          </Flex>
        </Container>
      </Box>
    </Fragment>
  )
}
