import { modelFields } from '../helpers/model-fields.js'

export const componentNoVariations = (vars) => {
  // Skip this template if not present in filter array
  if (
    !vars.options.filter.includes(vars.component.component.model.wheelroomType)
  ) {
    return
  }
  // Skip this template if variations are found
  if (
    vars.component.options &&
    vars.component.options.variations &&
    vars.component.options.variations.length > 1
  ) {
    return
  }

  const fields = modelFields(vars.component.component.model)
  const componentProps = fields
    .sort()
    .map(
      (fieldName) => `  ${fieldName}: string
`
    )
    .join('')

  return `/**
 * Component
 *
 * Component type: ${vars.componentName.camelCase}
 * Wheelroom type: ${vars.component.component.model.wheelroomType}
 *
 */

import { getVariation } from '@jacco-meijer/content-models'
import * as React from 'react'
import { defaultVariations } from '../../lib/defaults.js'
import { SectionProps } from '../section-props.js'
import { ${vars.componentName.pascalCase}BasicVar } from './${vars.componentName.dashCase}-basic-var.js'

const componentList = {
  [defaultVariations[0]]: ${vars.componentName.pascalCase}BasicVar,
}

export interface ${vars.componentName.pascalCase}Props extends SectionProps {
  /** Gatsby fetched data */
${componentProps}}

export const ${vars.componentName.pascalCase} = (props: ${vars.componentName.pascalCase}Props) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
`
}
