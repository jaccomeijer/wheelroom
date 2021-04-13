/**
 * - Bump version of package
 * - Sync versions of all packages
 * - Update all dependencies that use the packages
 * - Copy files to build folder
 * - Extend package.json fields in build folder
 * - Publish all packages that changed to npm
 *
 */

import { buildCloneDir, buildPackage } from './build'
import { getMakeContext } from './get-make-context'
import { getFsChildPackageNames } from './npm'
import { publish } from './publish'
import { versionTarget, versionDependencies } from './version'

export type Command = 'build' | 'version' | 'publish' | 'release'

export interface RunCommand {
  packageName: string
  command: Command
}

export const runCommand = async ({ packageName, command }: RunCommand) => {
  const cloneDir = 'build'
  let makeContext = await getMakeContext({ packageName, cloneDir })
  const packageNames = getFsChildPackageNames({
    fsChildren: makeContext.rootNode.fsChildren,
  })

  if (!makeContext.targetNode) {
    console.log(
      `Package ${
        packageName || 'parameter'
      } not found, please choose from: ${packageNames.join(', ')}`
    )
    process.exit(0)
  }

  switch (command) {
    case 'build':
      await buildPackage({ makeContext })
      await buildCloneDir({ makeContext })
      break
    case 'version':
      await buildCloneDir({ makeContext })
      await versionTarget({ makeContext })
      makeContext = await getMakeContext({ packageName, cloneDir })
      await versionDependencies({ makeContext })
      break
    case 'publish':
      await publish({ makeContext })
      break
    case 'release':
      await buildPackage({ makeContext })
      await buildCloneDir({ makeContext })
      await versionTarget({ makeContext })
      makeContext = await getMakeContext({ packageName, cloneDir })
      await versionDependencies({ makeContext })
      await publish({ makeContext })
      break
  }
}
