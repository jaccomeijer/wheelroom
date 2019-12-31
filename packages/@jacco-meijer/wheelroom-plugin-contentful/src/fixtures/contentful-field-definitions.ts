/**
 *
 * CONTENTFUL FIELD TYPE DEFINITIONS
 * =================================
 *
 * This file normally does not need any changes. It's here because you
 * ocassionally might add some project specific stuff.
 *
 * Initial content variables
 * =========================
 * - %firstInValidation%
 * - %firstlinkContentTypeValidation%
 * - %demoAsset%
 *
 */

import { ContentfulFieldDefinitions } from '../types/contentful-field-definitions'

export const contentfulFieldDefinitions: ContentfulFieldDefinitions = {
  attributeMappings: {
    components: 'specs.items.validations.0.linkContentType',
    helpText: 'settings.helpText',
    inValidation: 'specs.validations.0.in',
    initialContent: 'plugin-knows',
    localized: 'specs.localized',
    maxLength: 'specs.validations.0.size.max',
    required: 'specs.required',
    type: 'specs.type',
    unique: 'specs.validations.0.unique',
  },
  /** Wheelroom field types, these are different from Contentful types */
  fieldTypes: {
    date: {
      initialContent: '2019-06-03T00:00+01:00',
      specs: {
        name: '%Field name%',
        type: 'Date',
      },
      widgetId: 'datePicker',
    },
    dropdown: {
      initialContent: '%firstInValidation%',
      specs: {
        name: '%Field name%',
        type: 'Symbol',
      },
      widgetId: 'dropdown',
    },
    image: {
      initialContent: '%demoAsset%',
      specs: {
        linkType: 'Asset',
        name: '%Field name%',
        type: 'Link',
        validations: [
          {
            linkMimetypeGroup: ['image'],
          },
        ],
      },
      widgetId: 'assetLinkEditor',
    },
    multipleComponents: {
      initialContent: '%firstlinkContentTypeValidation%',
      specs: {
        items: {
          linkType: 'Entry',
          type: 'Link',
        },
        name: '%Field name%',
        type: 'Array',
      },
      widgetId: 'entryLinksEditor',
    },
    number: {
      initialContent: 5,
      specs: {
        name: '%Field name%',
        type: 'Integer',
      },
      widgetId: 'numberEditor',
    },
    richText: {
      specs: {
        name: '%Field name%',
        type: 'RichText',
      },
      widgetId: 'richTextEditor',
    },
    shortText: {
      specs: {
        name: '%Field name%',
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    tags: {
      initialContent: '%firstInValidation%',
      specs: {
        items: {
          type: 'Symbol',
        },
        name: '%Field name%',
        type: 'Array',
      },
      widgetId: 'tagEditor',
    },
  },
}
