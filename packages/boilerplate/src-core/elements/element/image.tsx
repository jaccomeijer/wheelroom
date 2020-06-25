/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel } from '../../lib/wheel'
import { NcssObjectProps } from '../../lib/ncss'
import { mergeNcss } from '../../lib/merge-ncss'
import { MediaObject } from '../types/media'
import {
  imageFigcaptionReset,
  imageImgReset,
  imagePictureReset,
} from './image-reset'

interface ImgAttrObjects {
  [key: string]: any
}

export interface ImageElementStyle extends NcssObjectProps {
  picture: NcssObjectProps
  figcaption?: NcssObjectProps
}

export interface ImageElementProps {
  wheel: Wheel
  description?: string
  media?: MediaObject
  includeFigcaption?: boolean
  title?: string
}

const defaultMediaObject = {
  description: 'No media description available',
  file: {
    url: '//placehold.it/320',
    fileName: 'none',
    contentType: 'image/png',
  },
  fluid: {
    sizes: '(max-width: 2560px, 100vw, 2560px)',
    src: '//placehold.it/320',
    srcSet: '',
  },
  title: 'No media title available',
} as MediaObject

export const Image = (props: ImageElementProps) => {
  const media = props.media || defaultMediaObject
  /** Avoid video media asset */
  /** The complete list of file types can be found here:
   * https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers */
  if (
    media?.file?.contentType === 'video/ogg' ||
    media?.file?.contentType === 'video/mp4' ||
    media?.file?.contentType === 'video/webm'
  ) {
    return null
  }
  /** If includeFigcaption is true use description as figcaption */
  const figcaption = {
    description:
      media.description || props.description || defaultMediaObject.description,
  }

  let imgElementAttrs: ImgAttrObjects
  const imgAttrs: ImgAttrObjects = {
    alt:
      media.description || props.description || defaultMediaObject.description,
    title: media.title || props.title || defaultMediaObject.title,
  }
  /** Not all image content types are supporting the attribute src set */
  if (
    props.media?.file?.contentType === 'image/jpeg' ||
    props.media?.file?.contentType === 'image/webp' ||
    props.media?.file?.contentType === 'image/png'
  ) {
    const fluidAttrs: ImgAttrObjects = {
      sizes: media.fluid && media.fluid.sizes,
      src: media.fluid && media.fluid.src,
      srcSet: media.fluid && media.fluid.srcSet,
    }
    imgElementAttrs = Object.assign(imgAttrs, fluidAttrs)
  } else {
    const fileAttrs: ImgAttrObjects = {
      src: media.file?.url || defaultMediaObject.file?.url,
    }
    imgElementAttrs = Object.assign(imgAttrs, fileAttrs)
  }

  const pictureLabel = { ncss: { label: 'picture' } }
  const imgLabel = { ncss: { label: 'image' } }
  const figcaptionLabel = { ncss: { label: 'image-figcaption' } }

  return (
    <picture
      css={styledSystem(
        props.wheel.wrSystemConfig,
        props.wheel.wrSystemTheme,
        mergeNcss([
          pictureLabel,
          imagePictureReset,
          props.wheel.elementStyles.image.picture,
          props.wheel.style.picture,
        ])
      )}
    >
      <img
        {...imgElementAttrs}
        css={styledSystem(
          props.wheel.wrSystemConfig,
          props.wheel.wrSystemTheme,
          mergeNcss([
            imgLabel,
            imageImgReset,
            props.wheel.elementStyles.image,
            props.wheel.style,
          ])
        )}
      />
      {props.includeFigcaption && figcaption.description && (
        <figcaption
          css={styledSystem(
            props.wheel.wrSystemConfig,
            props.wheel.wrSystemTheme,
            mergeNcss([
              figcaptionLabel,
              imageFigcaptionReset,
              props.wheel.elementStyles.image.figcaption,
              props.wheel.style.figcaption,
            ])
          )}
        >
          {figcaption.description}
        </figcaption>
      )}
    </picture>
  )
}
