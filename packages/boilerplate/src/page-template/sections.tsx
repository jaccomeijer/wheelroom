import React from 'react'
import { BlogSection } from '../wheelroom'
import { Landmarks } from './landmarks'
import { NavigationSection } from '../wheelroom'
import { PageSection } from '../wheelroom'
import { SectionProps } from './section-props'
import { TableSection } from '../wheelroom'
import { TextSection } from '../wheelroom'

export interface SectionMap {
  [contentfulSectionName: string]: any
}

const sectionMap: SectionMap = {
  ContentfulBlogSection: BlogSection,
  ContentfulNavigationSection: NavigationSection,
  ContentfulPageSection: PageSection,
  ContentfulTableSection: TableSection,
  ContentfulTextSection: TextSection,
}

export const Sections = (props: any) => {
  const sectionList = [] as JSX.Element[]
  props.sections.forEach((section: any, index: number) => {
    const Section = sectionMap[section.__typename]
    const sectionProps = {
      __typename: section.__typename,
      index,
      key: index,
      locale: props.locale,
      namedPaths: props.namedPaths,
      activeThemeId: props.activeThemeId,

      globals: props.globals,
      blog: props.blog,
      allBlog: props.allBlog,
      page: props.page,
      siteMetadata: props.siteMetadata,

      ...section,
    } as SectionProps

    sectionList.push(<Section {...sectionProps} />)
  })

  return <Landmarks>{sectionList}</Landmarks>
}