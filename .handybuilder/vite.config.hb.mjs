// HandyBuilder dev config — auto-generated, do not edit.
// Wraps the project's own vite config and injects the source-annotation plugin.
import { mergeConfig, loadConfigFromFile, defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import { hbSourcePlugin } from './hb-source-plugin.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')

console.log('[hb-config] HandyBuilder wrapper config loading from', projectRoot)

let userConfig = {}
try {
  const result = await loadConfigFromFile(
    { command: 'serve', mode: 'development' },
    undefined,
    projectRoot
  )
  if (result?.config) {
    userConfig = result.config
    console.log('[hb-config] User vite config loaded from', result.path)
  } else {
    console.warn('[hb-config] loadConfigFromFile returned null — no user config found')
  }
} catch (err) {
  console.warn('[hb-config] Could not load user vite config:', err?.message ?? err)
  console.warn('[hb-config] Continuing with bare Vite config (user plugins not loaded)')
}

console.log('[hb-config] Merging configs and starting dev server')
export default mergeConfig(
  defineConfig({ configFile: false, plugins: [hbSourcePlugin()] }),
  userConfig
)
