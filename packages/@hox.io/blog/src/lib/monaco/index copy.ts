import * as monaco from 'monaco-editor'
import dtsFiles from './dts-files.json'
import cobalt2 from './themes/cobalt-2.json'
import './userWorker'

// Set the theme
monaco.editor.defineTheme('cobalt2', cobalt2)

const loadDtsFiles = async () => {
  return Promise.all(
    Object.keys(dtsFiles as Record<string, string>).map(async pkg => {
      const pkgUrl = dtsFiles[pkg]
      const content = await (await fetch(pkgUrl)).text()

      return {
        package: pkg,
        content,
      }
    }),
  )
}

monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
  target: monaco.languages.typescript.ScriptTarget.ES2016,
  allowNonTsExtensions: true,
  moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
})

const setExtraLibs = async () => {
  const extraLibs = await loadDtsFiles()

  monaco.languages.typescript.typescriptDefaults.setExtraLibs(
    extraLibs.map(extraLib => ({
      content: `declare module '${extraLib.package}' { ${extraLib.content} }`,
      filePath: `file:///node_modules/${extraLib.package}/index.d.ts`,
    })),
  )
}

setExtraLibs()

export default monaco
