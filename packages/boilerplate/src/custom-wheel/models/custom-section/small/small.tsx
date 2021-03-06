/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Any, Wheel, Heading, Paragraph, Image } from '@wheelroom/core'
import { CustomData } from '../../custom/data'
import { CustomModel } from '../../custom/model'
import { CustomNcssTree } from '../../custom/ncss-tree'

interface CustomWheel extends Wheel {
  style: CustomNcssTree
}

interface SmallProps {
  /** Styling wheel */
  wheel: CustomWheel
  /** Custom models to render */
  model: CustomModel
  /** Data wheel */
  data: CustomData
}

export const Small = (props: SmallProps) => {
  if (!props.model) {
    return null
  }
  return (
    <Any wheel={{ ...props.wheel, style: props.wheel.style }}>
      <Any is="span" wheel={{ ...props.wheel, style: props.wheel.style.label }}>
        Variation: Small
      </Any>
      {!props.data.hideHeading && (
        <Heading
          is="h1"
          wheel={{ ...props.wheel, style: props.wheel.style.heading }}
        >
          {props.model.heading}
        </Heading>
      )}
      {!props.data.hideAbstract && (
        <Paragraph
          wheel={{ ...props.wheel, style: props.wheel.style.abstract }}
        >
          {props.model.abstract?.abstract}
        </Paragraph>
      )}
      {!props.data.hideMedia && (
        <Image
          description={props.model.media?.description}
          includeFigcaption={true}
          media={props.model.media}
          wheel={{ ...props.wheel, style: props.wheel.style.image }}
        />
      )}
    </Any>
  )
}
