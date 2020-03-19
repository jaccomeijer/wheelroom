/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '../styled-system/styled-system'

export const Box = (props: any) => (
  <div
    css={styledSystem({ boxSizing: 'border-box', ...props })}
    children={props.children}
  />
)

export const Flex = (props: any) => (
  <div
    css={styledSystem({
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      ...props,
    })}
    children={props.children}
  />
)

export const Container = (props: any) => {
  return (
    <div
      css={styledSystem({ mx: 'auto', maxWidth: '1024px', ...props })}
      children={props.children}
    />
  )
}
