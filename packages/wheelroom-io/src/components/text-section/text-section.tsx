/* eslint-disable react/display-name */
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import {
  A,
  AnyProps,
  B,
  Blockquote,
  Code,
  Div,
  Hr,
  I,
  Li,
  Ol,
  Td,
  Tr,
  U,
  Ul,
} from '@wheelroom/any/react'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { ReactNode } from 'react'
import { Link } from 'gatsby'
import { ContentfulPageSection, PageSection } from '../page/page-section'
import { ContentfulAsset } from '../asset/contentful-asset'
import { Asset } from '../asset/asset'
import { Text } from '../text/text'
import { H1, H2, H3, H4, H5, H6 } from '../heading/heading'
import { ContentfulPage } from '../page/contentful-page'
import { ContentfulTextSection } from './contentful-text-section'

export interface TextSection {
  contentfulTextSection?: ContentfulTextSection
}

type AnyDivProps = AnyProps['div']
export interface TextSectionProps extends AnyDivProps {
  model?: TextSection
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const textSectionStyleFactory = (args: {
  variant?: any
  options?: any
}) => {
  return {}
}

export const TextSection = ({ model, ...props }: TextSectionProps) => {
  if (!model?.contentfulTextSection) return null
  const css = textSectionStyleFactory({})
  const document = model.contentfulTextSection.text?.json
  const links = model.contentfulTextSection.text?.links

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (children: ReactNode) => <B>{children}</B>,
      [MARKS.CODE]: (children: ReactNode) => <Code>{children}</Code>,
      [MARKS.ITALIC]: (children: ReactNode) => <I>{children}</I>,
      [MARKS.UNDERLINE]: (children: ReactNode) => <U>{children}</U>,
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <H1>{children}</H1>,
      [BLOCKS.HEADING_2]: (node, children) => <H2>{children}</H2>,
      [BLOCKS.HEADING_3]: (node, children) => <H3>{children}</H3>,
      [BLOCKS.HEADING_4]: (node, children) => <H4>{children}</H4>,
      [BLOCKS.HEADING_5]: (node, children) => <H5>{children}</H5>,
      [BLOCKS.HEADING_6]: (node, children) => <H6>{children}</H6>,
      [BLOCKS.HR]: () => <Hr />,
      [BLOCKS.LIST_ITEM]: (node, children) => <Li>{children}</Li>,
      [BLOCKS.OL_LIST]: (node, children) => <Ol>{children}</Ol>,
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.QUOTE]: (node, children) => <Blockquote>{children}</Blockquote>,
      [BLOCKS.TABLE_CELL]: (node, children) => <Td>{children}</Td>,
      [BLOCKS.TABLE_ROW]: (node, children) => <Tr>{children}</Tr>,
      [BLOCKS.TABLE]: (node, children) => <Blockquote>{children}</Blockquote>,
      [BLOCKS.UL_LIST]: (node, children) => <Ul>{children}</Ul>,
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const entry = links?.entries.block.find(
          (entry) => entry.sys?.id === node.data.target.sys.id
        ) as ContentfulPageSection
        return <PageSection model={{ contentfulPageSections: [entry] }} />
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = links?.assets.block.find(
          (asset) => asset.sys?.id === node.data.target.sys.id
        )
        return <Asset model={{ contentfulAsset: asset }} />
      },
      [INLINES.ASSET_HYPERLINK]: (node) => {
        const asset = links?.assets.hyperlink.find(
          (asset) => asset.sys?.id === node.data.target.sys.id
        ) as ContentfulAsset
        return (
          <A title={asset.description} href={asset.url}>
            {asset.title}
          </A>
        )
      },
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        const entry = links?.entries.hyperlink.find(
          (entry) => entry.sys?.id === node.data.target.sys.id
        ) as ContentfulPage
        const path = entry.path || 'no-path'
        return <Link to={path}>{path}</Link>
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return <A href={node.data.uri}>{children}</A>
      },
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        const entry = links?.entries.inline.find(
          (entry) => entry.sys?.id === node.data.target.sys.id
        ) as ContentfulPage
        console.log('TODO: INLINES.EMBEDDED_ENTRY', entry)
        return <>TODO: {entry.__typename}</>
      },
    },
  }

  return (
    <Div css={css} {...props}>
      {document && documentToReactComponents(document, options)}
    </Div>
  )
}
