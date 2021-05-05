import { PageProps } from 'gatsby'
import { AnyStyle, Button, Div } from '@wheelroom/any/elements'
import { Global } from '@emotion/react'
import { globalReset } from '@wheelroom/any/resets/global-reset'

const objectStyles = {
  fontFamily: `-apple-system, BlinkMacSystemFont,
  “Segoe UI”, “Roboto”, “Oxygen”,
  “Ubuntu”, “Cantarell”, “Fira Sans”,
  “Droid Sans”, “Helvetica Neue”, sans-serif`,
  padding: 16,
  fontSize: 32,
}

const HomePage = (props: PageProps) => {
  console.log('Page props', props)
  return (
    <>
      <Global styles={globalReset} />
      <Div css={objectStyles}>
        Gatsby + TypeScript + Emotion + Normalize.css
      </Div>
    </>
  )
}

export default HomePage