import * as wheelroom from '@wheelroom/wheelroom'
import { argvCommand } from '../../../fixtures/argv-command'
import { command } from '../command'

jest.setTimeout(10000)

describe('Command create boilerplate should', () => {
  test('call wheelroom.writeFiles correctly', async () => {
    const fseSpy = jest.spyOn(wheelroom, 'writeFiles')
    await command.handler(argvCommand as any)
    expect(fseSpy).toHaveBeenCalledTimes(2)
    expect(fseSpy.mock.calls).toMatchSnapshot()
    fseSpy.mockRestore()
  })
})
