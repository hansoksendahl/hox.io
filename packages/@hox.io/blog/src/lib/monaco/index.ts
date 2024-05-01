import * as monaco from 'monaco-editor'
import cobalt2 from './themes/cobalt-2.json'
import './userWorker'

// Set the theme
monaco.editor.defineTheme('cobalt2', cobalt2)

// monaco.languages.typescript.typescriptDefaults.addExtraLib(
//   'declare module "utility-types" {}',
//   'file:///node_modules/@recon-struct/utility-types/index.d.ts',
// )

// const PACKAGE_JSON = {
//   dependencies: {
//     '@recon-struct/utility-types': '*',
//   },
// }

// monaco.languages.typescript.typescriptDefaults.addExtraLib(
//   JSON.stringify(PACKAGE_JSON),
//   'package.json',
// )

export default monaco
