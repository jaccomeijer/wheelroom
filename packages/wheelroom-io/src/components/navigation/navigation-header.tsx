import { Div, Nav, Strong } from '@wheelroom/any/react'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
} from '../../lib/component-styles'
import { useGlobals } from '../../lib/globals-provider'
import { mediaQuery } from '../../lib/media-query'
import { Anchor } from '../elements/anchor'
import { ContentfulGlobals } from '../page/contentful-globals'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationSegment } from './navigation-segment'
import { NavigationSegmentList } from './navigation-segment-list'

export type NavigationHeaderVariant = 'fixed' | 'fluid'
export type NavigationHeaderModel = {
  contentfulNavigationSection?: ContentfulNavigationSection
}
export type NavigationHeaderProps = ComponentProps<
  NavigationHeaderModel,
  NavigationHeaderVariant,
  undefined
>['div']

const navigationHeaderBaseStyle = {
  label: 'NavigationHeaderContainer',
  display: 'flex',
  height: '100%',
  justifyContent: 'space-between',
  padding: '0 16px',
  width: '100%',
}

const styleMap: StyleMap<NavigationHeaderVariant> = {
  fixed: {
    ...navigationHeaderBaseStyle,
    margin: '0 auto',
    maxWidth: 1280,
  },
  fluid: navigationHeaderBaseStyle,
}

export const navigationHeaderStyleFactory: StyleFactory<
  NavigationHeaderVariant,
  undefined
> = (args) => {
  const useVariant = args.variant || 'fixed'
  const baseStyle = styleMap[useVariant]
  return mediaQuery([baseStyle])
}

export const NavigationHeader = ({
  variant,
  options,
  model,
  ...props
}: NavigationHeaderProps) => {
  type Context = { globals: ContentfulGlobals }
  const { globals } = useGlobals<Context>()
  const section = model?.contentfulNavigationSection
  if (!section?.headerCollection?.items?.length) return null
  const css = navigationHeaderStyleFactory({
    variant,
    options,
  })
  return (
    <Div {...props}>
      {/* TODO: refactor SkipToContent component. This is made for styling purposes only.  */}
      <Anchor
        css={{
          label: 'SkipToContent',
          left: '-100%',
          position: 'absolute',
          ':focus': {
            backgroundColor: 'white',
            left: 0,
            padding: 16,
            right: 0,
            textAlign: 'center',
            top: 0,
            width: '100%',
            zIndex: 1002,
          },
        }}
        href="#content"
      >
        {globals.skipToContentHeading}
      </Anchor>
      {/* Wrapper element needs position Fixed or undefined variants */}
      <Div
        css={{
          label: 'NavigationHeaderWrapper',
          height: 70,
          borderBottom: '1px solid black',
        }}
      >
        {/* Note: Here starts the NavigationHeader with fixed and fluid variants */}
        <Div css={css}>
          {/* TODO: refactor NavigationBranding model component. This is made for styling purposes only.  */}
          <Div
            css={{
              label: 'NavigationBranding',
              alignItems: 'center',
              display: 'flex',
              marginRight: 16,
            }}
          >
            <Anchor href="./">
              <Strong>{globals.siteHeading}</Strong>
            </Anchor>
          </Div>
          {/* Wrap all segments within nav element for accessibility and responsive styling reasons */}
          <Nav
            css={mediaQuery({
              display: ['none', 'none', 'flex'],
              flex: '1 1 0%',
              alignItems: 'center',
            })}
          >
            {/* Before NavigationMenu, etc... We don't need an extra container, please use NavigationSegment and –List instead. */}
            <NavigationSegmentList
              model={{
                contentfulNavigationSegment:
                  section?.headerCollection?.items[0],
              }}
              variant="menu"
            />
            <NavigationSegment
              model={{ contentfulNavigationSegment: section?.actions }}
              variant="primary"
            />
            <NavigationSegment
              css={{ paddingLeft: 8 }}
              model={{ contentfulNavigationSegment: section?.social }}
              variant="secondary"
            />
          </Nav>
        </Div>
      </Div>
    </Div>
  )
}
