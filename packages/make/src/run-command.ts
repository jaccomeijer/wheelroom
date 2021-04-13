/**
 * - Bump version of package
 * - Sync versions of all packages
 * - Update all dependencies that use the packages
 * - Copy files to build folder
 * - Extend package.json fields in build folder
 * - Publish all packages that changed to npm
 *
 */

import Arborist from '@npmcli/arborist'
import { buildCloneDir, buildPackage } from './build'
import { getFsChild, getFsChildPackageNames, getSyncedNodes } from './npm'
import { publish } from './publish'
import { versionTarget, versionDependencies } from './version'

export type Command = 'build' | 'version' | 'publish' | 'release'

export interface RunCommand {
  packageName: string
  command: Command
}

export const runCommand = async ({ packageName, command }: RunCommand) => {
  const arborist = new Arborist({ path: process.cwd() })
  const rootNode = await arborist.loadActual()
  const fsChildren = rootNode.fsChildren
  const targetNode = getFsChild({ fsChildren, packageName })
  const packageNames = getFsChildPackageNames({ fsChildren })

  if (!targetNode) {
    console.log(
      `Package ${
        packageName || 'parameter'
      } not found, please choose from: ${packageNames.join(', ')}`
    )
    process.exit(0)
  }

  const syncedNodes = getSyncedNodes({ node: targetNode, fsChildren })
  const buildNodes = [targetNode, ...syncedNodes]
  const cloneDir = 'build'

  switch (command) {
    case 'build':
      await buildPackage({ buildNodes })
      await buildCloneDir({ rootNode, buildNodes, cloneDir })
      break
    case 'version':
      await buildCloneDir({ rootNode, buildNodes, cloneDir })
      await versionTarget({ rootNode, targetNode })
      await versionDependencies({ rootNode, targetNode, buildNodes })
      break
    case 'publish':
      await publish({ buildNodes, cloneDir })
      break
    case 'release':
      await buildPackage({ buildNodes })
      await buildCloneDir({ rootNode, buildNodes, cloneDir })
      await versionTarget({ rootNode, targetNode })
      await versionDependencies({ rootNode, targetNode, buildNodes })
      await publish({ buildNodes, cloneDir })
      break
  }
}
