import {
  deleteEntry,
  getEntry,
  unPublishEntry,
} from '../../contentful-api/content.js'
import {
  getClient,
  getEnvironment,
  getSpace,
} from '../../contentful-api/init.js'
import { componentsFound } from '../../lib/components-found.js'
import { confirmAction } from '../../lib/confirm-action.js'
import { getCurrentModel } from '../../lib/get-current-model.js'
import { initializeContext } from '../../lib/initialize-context.js'
import { readDotEnv } from '../../lib/read-dot-env.js'
import { Context } from '../../types/context.js'
import { deleteAsset } from './delete-asset.js'

const finish = async (context: Context) => {
  console.log(
    `Succesfully deleted content for: ${context.currentModel.model.type}`
  )
  return context
}

const handleError = (error: Error) => {
  console.log(error.message)
}

export const deleteContentForModel = async (context: Context) => {
  try {
    await getClient(context)
    await getSpace(context)
    await getEnvironment(context)

    await getEntry(context)
    await unPublishEntry(context)
    await deleteEntry(context)
    await finish(context)
  } catch (error) {
    handleError(error)
  }
}

export const handler = async (argv: any) => {
  readDotEnv()
  const context = initializeContext(argv)
  if (!componentsFound(context.components)) {
    return
  }
  const confirmed = await confirmAction(
    'Remove Contentful demo content for these components',
    context
  )
  if (!confirmed) {
    return
  }
  for (const [componentName, component] of Object.entries(context.components)) {
    console.log(
      `Process removing content for model ${componentName} =============`
    )
    const newContext = initializeContext(argv)
    newContext.currentModel = getCurrentModel(component)

    await deleteContentForModel(newContext)
  }

  await deleteAsset(context)
}
