import { WheelroomConfig } from '@wheelroom/wheelroom'
import { boilerplateTemplates } from './template-sets/boilerplate/boilerplate-templates'
import { graphqlTemplates } from './template-sets/graphql/graphql-templates'
import { contentSets } from './content-sets/content-sets'
import { replaceSets } from './replace-sets'

import { models } from './will-move-to-wr-config/models'
import { fieldDefautls } from './will-move-to-wr-config/field-defaults'
import { commonFields } from './will-move-to-wr-config/common-fields'
import { contentfulFieldDefinitions } from './will-move-to-wr-config/contentful-field-definitions'

export const config: WheelroomConfig = {
  commonFields: commonFields,
  components: models,
  fieldDefaults: fieldDefautls,
  plugins: [
    {
      options: {
        contentSets,
        fieldDefinitions: contentfulFieldDefinitions,
        replaceSets,
      },
      resolve: '@wheelroom/wheelroom-plugin-contentful',
    },
    {
      options: {
        templateSets: boilerplateTemplates,
      },
      resolve: '@wheelroom/wheelroom-plugin-boilerplate',
    },
    {
      options: {
        templateSets: graphqlTemplates,
      },
      resolve: '@wheelroom/wheelroom-plugin-graphql',
    },
  ],
}
