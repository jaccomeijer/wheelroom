import { TemplateSets } from '../../types/template-sets'
import { fragment } from './fragment'
import { query } from './query'

export const templateSets: TemplateSets = {
  gatsbyjs: {
    fragment: {
      filterComponentSetting: 'asFragment',
      path: '%component-name%/fragment.js',
      template: fragment,
    },
    query: {
      filterComponentSetting: 'asQuery',
      path: '%component-name%/query.js',
      template: query,
    },
  },
}
