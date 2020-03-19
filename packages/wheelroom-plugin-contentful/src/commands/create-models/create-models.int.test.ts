import { argvCommand } from '../../fixtures/argv-command'
import { command } from './command'

/**
 * Creating all models takes longer than the default 5 seconds max
 */
jest.setTimeout(60000)

describe('Command create models should', () => {
  test('call console.log', async () => {
    argvCommand._[0] = 'create-models'
    const spy = jest.spyOn(console, 'log')
    await command.handler(argvCommand as any)
    expect(spy).toBeCalled()
    spy.mockRestore()
  })
})
