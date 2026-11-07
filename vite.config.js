import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function adminApiPlugin() {
  const contentPath = path.resolve(__dirname, 'src/data/siteContent.json')
  const uploadsDir = path.resolve(__dirname, 'public/images/uploads')

  return {
    name: 'admin-api-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // GET /api/admin/content
        if (req.url === '/api/admin/content' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json')
          try {
            if (fs.existsSync(contentPath)) {
              const data = fs.readFileSync(contentPath, 'utf-8')
              res.statusCode = 200
              return res.end(data)
            } else {
              res.statusCode = 404
              return res.end(JSON.stringify({ error: 'Content file not found' }))
            }
          } catch (err) {
            res.statusCode = 500
            return res.end(JSON.stringify({ error: err.message }))
          }
        }

        // POST /api/admin/content
        if (req.url === '/api/admin/content' && req.method === 'POST') {
          let body = ''
          req.on('data', chunk => {
            body += chunk
          })
          req.on('end', () => {
            res.setHeader('Content-Type', 'application/json')
            try {
              const parsed = JSON.parse(body)
              fs.writeFileSync(contentPath, JSON.stringify(parsed, null, 2), 'utf-8')
              res.statusCode = 200
              return res.end(JSON.stringify({ success: true, message: 'Content saved successfully' }))
            } catch (err) {
              res.statusCode = 400
              return res.end(JSON.stringify({ error: 'Invalid JSON or write error: ' + err.message }))
            }
          })
          return
        }

        // POST /api/admin/upload
        if (req.url === '/api/admin/upload' && req.method === 'POST') {
          let body = ''
          req.on('data', chunk => {
            body += chunk
          })
          req.on('end', () => {
            res.setHeader('Content-Type', 'application/json')
            try {
              const { dataUrl, filename } = JSON.parse(body)
              if (!dataUrl) {
                res.statusCode = 400
                return res.end(JSON.stringify({ error: 'No dataUrl provided' }))
              }

              // Extract base64 and mime
              const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
              if (!matches || matches.length !== 3) {
                res.statusCode = 400
                return res.end(JSON.stringify({ error: 'Invalid base64 dataUrl' }))
              }

              const ext = matches[1].split('/')[1]?.replace('jpeg', 'jpg') || 'png'
              const rawName = (filename || `upload-${Date.now()}`).replace(/[^a-zA-Z0-9_-]/g, '_')
              const cleanFilename = `${Date.now()}-${rawName}.${ext}`

              if (!fs.existsSync(uploadsDir)) {
                fs.mkdirSync(uploadsDir, { recursive: true })
              }

              const buffer = Buffer.from(matches[2], 'base64')
              const targetPath = path.join(uploadsDir, cleanFilename)
              fs.writeFileSync(targetPath, buffer)

              res.statusCode = 200
              return res.end(JSON.stringify({
                success: true,
                url: `/images/uploads/${cleanFilename}`,
                filename: cleanFilename,
                bytes: buffer.length
              }))
            } catch (err) {
              res.statusCode = 500
              return res.end(JSON.stringify({ error: 'Upload failed: ' + err.message }))
            }
          })
          return
        }

        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), adminApiPlugin()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'zustand']
        }
      }
    }
  },
  server: {
    port: 5173,
    strictPort: false
  }
})
