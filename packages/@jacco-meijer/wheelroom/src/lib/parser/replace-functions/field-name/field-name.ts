/**
 * - %Field name%
 * - %field name%
 * - %fieldName%
 * - %FieldName%
 * - %field-name%
 *
 * Requires vars: fieldName
 *
 */

import { ReplaceFunctionsList, ReplaceVars } from '../../../../types/parser'
import { getCases } from '../../get-cases'

export const fieldNameFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVars) =>
      vars.fieldName
        ? getCases(vars.fieldName).sentenceCase
        : 'bug-no-field-name',
    search: 'Field name',
  },
  {
    replace: (vars: ReplaceVars) =>
      vars.fieldName
        ? getCases(vars.fieldName).pascalCase
        : 'bug-no-field-name',
    search: 'FieldName',
  },
  {
    replace: (vars: ReplaceVars) =>
      vars.fieldName ? getCases(vars.fieldName).lowerCase : 'bug-no-field-name',
    search: 'field name',
  },
  {
    replace: (vars: ReplaceVars) =>
      vars.fieldName ? getCases(vars.fieldName).kebabCase : 'bug-no-field-name',
    search: 'field-name',
  },
  {
    replace: (vars: ReplaceVars) =>
      vars.fieldName ? getCases(vars.fieldName).camelCase : 'bug-no-field-name',
    search: 'fieldName',
  },
]
