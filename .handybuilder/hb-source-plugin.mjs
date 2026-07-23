// HandyBuilder source plugin — auto-generated, do not edit.
// Injects data-hb-file and data-hb-line onto every JSX element so HandyBuilder
// can map DOM nodes back to their source location without relying on text search.
import { createRequire } from 'module'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const _require = createRequire(import.meta.url)

let babel = null
const babelPath = process.env.HANDYBUILDER_BABEL_CORE_PATH
  || path.join(projectRoot, 'node_modules', '@babel', 'core')
try {
  babel = _require(babelPath)
  console.log('[hb-plugin] @babel/core loaded from', babelPath)
} catch (err) {
  console.warn('[hb-plugin] @babel/core not found at', babelPath, '— source attributes will not be injected')
  console.warn('[hb-plugin] error:', err?.message ?? String(err))
}

function babelHbPlugin({ types: t }) {
  return {
    visitor: {
      JSXOpeningElement(p, state) {
        // Skip if already stamped (idempotent)
        if (p.node.attributes.some(
          (a) => t.isJSXAttribute(a) && t.isJSXIdentifier(a.name, { name: 'data-hb-file' })
        )) return
        const loc = p.node.loc
        if (!loc) return
        const file = state.filename || ''
        p.node.attributes.push(
          t.jsxAttribute(t.jsxIdentifier('data-hb-file'), t.stringLiteral(file)),
          t.jsxAttribute(t.jsxIdentifier('data-hb-line'), t.stringLiteral(String(loc.start.line))),
          t.jsxAttribute(t.jsxIdentifier('data-hb-col'), t.stringLiteral(String(loc.start.column + 1)))
        )
      }
    }
  }
}

export function hbSourcePlugin() {
  console.log('[hb-plugin] HandyBuilder source plugin initialised (babel available:', babel !== null, ')')
  let printedTransformSample = false
  return {
    name: 'handybuilder-source',
    enforce: 'pre',
    configResolved(config) {
      const names = config.plugins.map((plugin) => plugin.name)
      const hbIndex = names.indexOf('handybuilder-source')
      const reactIndex = names.findIndex((name) => name.includes('react'))
      console.log('[hb-plugin] resolved plugin order:', names.join(' -> '))
      console.log('[hb-plugin] source plugin before React:', reactIndex === -1 || hbIndex < reactIndex,
        '(hb index:', hbIndex, 'react index:', reactIndex, ')')
    },
    transformIndexHtml: {
      order: 'pre',
      handler() {
        return [{
          tag: 'script',
          children: 'window.__HANDYBUILDER_SOURCE_PLUGIN_ACTIVE__ = true',
          injectTo: 'head-prepend'
        }]
      }
    },
    transform(code, id) {
      if (!babel) return null
      if (!id.match(/\.(jsx|tsx)$/)) return null
      if (id.includes('node_modules')) return null
      console.log('[hb-plugin] transforming:', id)
      try {
        const result = babel.transformSync(code, {
          filename: id,
          plugins: [babelHbPlugin],
          parserOpts: { plugins: ['jsx', 'typescript'] },
          configFile: false,
          babelrc: false,
        })
        if (result?.code) {
          if (!printedTransformSample) {
            printedTransformSample = true
            console.log('[hb-plugin] transformed code sample for', id, '\n' + result.code.slice(0, 1200))
          }
          return { code: result.code, map: null }
        }
        console.warn('[hb-plugin] babel returned no code for', id)
        return null
      } catch (err) {
        console.error('[hb-plugin] babel transform failed for', id, ':', err?.message ?? String(err))
        return null
      }
    }
  }
}
