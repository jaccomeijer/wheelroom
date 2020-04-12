import { NcssProps } from '../../types'
import { TopicPreset } from '../../topic/topic-preset'

export interface PageSectionGalleryPreset {
  container: NcssProps
  topic?: TopicPreset
  wrapper: NcssProps
}

export const pageSectionGalleryTreeStyle: PageSectionGalleryPreset = {
  container: {
    ncss: {
      flexDirection: ['column', 'row'],
      flexWrap: 'wrap',
      alignItems: 'center',
    },
  },
  topic: {
    ncss: {
      w: [1, 1 / 2],
    },
    content: {
      ncss: {},
      actions: {
        ncss: {},
        link: {
          ncss: {},
        },
      },
      text: {
        ncss: {},
        abstract: {
          ncss: {},
        },
        heading: {
          ncss: {},
        },
      },
    },
    media: {
      ncss: {},
      image: {
        img: {
          ncss: {},
        },
        picture: {
          ncss: {
            p: 3,
          },
        },
        figcaption: {
          ncss: {},
        },
      },
      video: {
        video: {
          ncss: {},
        },
        description: {
          ncss: {},
        },
      },
    },
  },
  wrapper: {
    ncss: {
      label: 'wrapper',
      py: 3,
    },
  },
}