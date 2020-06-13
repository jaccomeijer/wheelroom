import {
  CheckboxField,
  DropdownField,
  LongTextField,
  MediaField,
  MultipleComponentsField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  TagsField,
  WheelroomComponents,
} from '@wheelroom/wheelroom'
import { featherIconNames } from '../feather-icon-names'
import { topicOptions } from './topic-options'

export const coreModels: WheelroomComponents = {
  action: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      description: {
        type: 'shortText',
      } as ShortTextField,
      icon: {
        items: featherIconNames,
        type: 'dropdown',
      } as DropdownField,
      page: {
        allowedComponents: ['page'],
        // Limit expanding pages, prevent circ refs
        expandFragmentRef: true,
        type: 'singleComponent',
      } as SingleComponentField,
      url: {
        initialContent: 'https://localhost:8000',
        type: 'shortText',
        typePostfix: 'Url',
      } as ShortTextField,
      anchor: {
        helpText: 'Example: my-anchor',
        type: 'shortText',
      } as ShortTextField,
      query: {
        helpText: 'Example: &x=1&y=2',
        type: 'shortText',
      } as ShortTextField,
      eventId: {
        initialContent: 'initial-content-for-action-event-id',
        typePostfix: 'Slug',
        helpText: 'Example: my-event-id',
        type: 'shortText',
        unique: true,
      } as ShortTextField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  embed: {
    fields: {
      code: {
        type: 'longText',
      } as LongTextField,
      type: {
        items: ['html', 'js-app', 'js-page', 'js-action', 'js-page-section'],
        type: 'dropdown',
      } as DropdownField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  globals: {
    fields: {
      siteAuthor: {
        type: 'shortText',
      } as ShortTextField,
      siteDescription: {
        type: 'shortText',
      } as ShortTextField,
      siteHeading: {
        type: 'shortText',
      } as ShortTextField,
      siteKeywords: {
        type: 'tags',
      } as TagsField,
      siteImage: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      siteEmbeds: {
        allowedComponents: ['embed'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      skipToContentHeading: {
        type: 'shortText',
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'global',
    },
  },
  mediaBreakpoint: {
    fields: {
      small: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      medium: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      large: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      extraLarge: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  navigation: {
    fields: {
      variation: {
        items: ['menu', 'list', 'actions', 'social', 'brand', 'legal'],
        type: 'dropdown',
      } as DropdownField,
      segments: {
        allowedComponents: ['navigationSegment'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  navigationSegment: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      actions: {
        allowedComponents: ['action'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
  navigationSection: {
    fields: {
      variation: {
        items: ['header', 'footer'],
        type: 'dropdown',
      } as DropdownField,
      navigation: {
        allowedComponents: ['navigation'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      eventId: {
        type: 'shortText',
        initialContent: 'initial-content-for-navigation-section-event-id',
        typePostfix: 'Slug',
        helpText: 'Example: my-event-id',
        unique: true,
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      // asPageSection will create boilerplate code
      asBoilerplate: false,
      asFragment: true,
      asPageSection: true,
    },
  },
  page: {
    fields: {
      path: {
        initialContent: '/boilerplate',
        required: true,
        type: 'shortText',
        typePostfix: 'Path',
        unique: true,
      } as ShortTextField,
      sections: {
        allowedComponents: [
          '%componentNameArray(filter:settings.asPageSection)%',
        ],
        initialContent: ['%componentNameArray(filter:settings.asPageSection)%'],
        required: true,
        type: 'multipleComponents',
      } as MultipleComponentsField,
      theme: {
        items: ['light', 'dark'],
        type: 'dropdown',
      } as DropdownField,
      seoTitle: {
        type: 'shortText',
      } as ShortTextField,
      seoDescription: {
        maxLength: 155,
        type: 'shortText',
      } as ShortTextField,
      seoImage: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      seoKeywords: {
        type: 'tags',
      } as TagsField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'page',
    },
  },
  pageSection: {
    fields: {
      variation: {
        items: [
          'block',
          'card',
          'divider',
          'featured',
          'gallery',
          'headline',
          'hero',
          'image',
          'quote',
          'showcase',
          'video',
        ],
        type: 'dropdown',
      } as DropdownField,
      topics: {
        allowedComponents: ['topic'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      topicOptions: {
        initialContent: ['Hide icon'],
        items: topicOptions.en,
        type: 'checkbox',
      } as CheckboxField,
      eventId: {
        type: 'shortText',
        initialContent: 'initial-content-for-page-section-event-id',
        typePostfix: 'Slug',
        helpText: 'Example: my-event-id',
        unique: true,
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      // asPageSection will create boilerplate code
      asBoilerplate: false,
      asFragment: true,
      asPageSection: true,
    },
  },
  text: {
    fields: {
      text: {
        required: true,
        type: 'richText',
      } as RichTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
  },
  textSection: {
    fields: {
      variation: {
        items: ['text'],
        type: 'dropdown',
      } as DropdownField,
      text: {
        allowedComponents: ['text'],
        type: 'singleComponent',
      } as SingleComponentField,
      eventId: {
        type: 'shortText',
        initialContent: 'initial-content-for-text-section-event-id',
        typePostfix: 'Slug',
        helpText: 'Example: my-event-id',
        unique: true,
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      // asPageSection will create boilerplate code
      asBoilerplate: false,
      asFragment: true,
      asPageSection: true,
    },
  },
  topic: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        type: 'longText',
      } as LongTextField,
      media: {
        type: 'media',
      } as MediaField,
      icon: {
        items: featherIconNames,
        type: 'dropdown',
      } as DropdownField,
      actions: {
        allowedComponents: ['action'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      poster: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      mediaEmbed: {
        helpText:
          'Add a Youtube/Vimeo embed code. Note: Media embed only uses Embed-type: html',
        allowedComponents: ['embed'],
        type: 'singleComponent',
      } as SingleComponentField,
      mediaBreakpoint: {
        helpText: 'Display a different media asset on each Breakpoint',
        allowedComponents: ['mediaBreakpoint'],
        type: 'singleComponent',
      } as SingleComponentField,
    },
    settings: {
      asBoilerplate: true,
      asFragment: true,
    },
    modelVersion: '1.0.0',
  },
}
