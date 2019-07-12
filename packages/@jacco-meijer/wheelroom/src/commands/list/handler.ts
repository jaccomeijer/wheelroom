import { ComponentConfig } from '../../types/component-config'

export const handler = async (argv: any) => {
  console.log('filter', argv.filter)

  argv.components.componentConfigs.forEach(async (config: ComponentConfig) => {
    console.log(`============================
  Component type:       ${config.model.type}
  Wheelroom type:       ${config.model.wheelroomType}
  Model version:        ${config.model.modelVersion}
  Source module:        ${config.sourceModule}
  Overwrite variations: ${config.overwriteVariations}
  Variations:           ${config.variations.length ? config.variations : 'None'}
  Has graphql fragment: ${config.fragment ? 'Yes' : 'No'}
  Has graphql query:    ${config.query ? 'Yes' : 'No'}
  `)
  })
}
