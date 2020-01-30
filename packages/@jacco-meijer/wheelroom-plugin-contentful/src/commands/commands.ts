import { command as createContentCmd } from './create-content/command'
import { command as createModelsCmd } from './create-models/command'
import { command as deleteContentCmd } from './delete-content/command'
import { command as listModlesCmd } from './list-models/command'

export const commands = [
  createContentCmd,
  createModelsCmd,
  deleteContentCmd,
  listModlesCmd,
]
