import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function devApiPlugin() {
  const contentPath = path.resolve(__dirname, 'src/data/siteContent.json')
  const uploadsDir = path.resolve(__dirname, 'public/images/uploads')

  return {
    name: 'dev-api-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Helper to parse JSON body
        const readBody = (callback) => {
          let body = ''
          req.on('data', chunk => { body += chunk })
          req.on('end', () => {
            try {
              callback(null, body ? JSON.parse(body) : {})
            } catch (err) {
              callback(err)
            }
          })
        }

        // POST /api/contact
        if (req.url === '/api/contact' && req.method === 'POST') {
          res.setHeader('Content-Type', 'application/json')
          readBody((err, data) => {
            if (err || !data.name || !data.email || !data.message) {
              res.statusCode = 400
              return res.end(JSON.stringify({ success: false, error: 'Please provide valid name, email, and message.' }))
            }
            res.statusCode = 200
            return res.end(JSON.stringify({
              success: true,
              message: 'Your inquiry has been received by our private concierge. We will respond within 24 hours.'
            }))
          })
          return
        }

        // POST /api/appointment
        if (req.url === '/api/appointment' && req.method === 'POST') {
          res.setHeader('Content-Type', 'application/json')
          readBody((err, data) => {
            if (err || !data.name || !data.email || !data.date) {
              res.statusCode = 400
              return res.end(JSON.stringify({ success: false, error: 'Please provide valid name, email, and appointment date.' }))
            }
            res.statusCode = 200
            return res.end(JSON.stringify({
              success: true,
              message: 'Your appointment request has been confirmed. Our concierge will contact you within 4 hours to finalize details.'
            }))
          })
          return
        }

        // POST /api/newsletter
        if (req.url === '/api/newsletter' && req.method === 'POST') {
          res.setHeader('Content-Type', 'application/json')
          readBody((err, data) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (err || !data.email || !emailRegex.test(data.email)) {
              res.statusCode = 400
              return res.end(JSON.stringify({ success: false, error: 'Please provide a valid email address.' }))
            }
            res.statusCode = 200
            return res.end(JSON.stringify({
              success: true,
              message: 'Welcome to the Circle of Devotion. You will receive private previews and atelier letters.'
            }))
          })
          return
        }

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
          res.setHeader('Content-Type', 'application/json')
          readBody((err, parsed) => {
            if (err) {
              res.statusCode = 400
              return res.end(JSON.stringify({ error: 'Invalid JSON: ' + err.message }))
            }
            try {
              fs.writeFileSync(contentPath, JSON.stringify(parsed, null, 2), 'utf-8')
              res.statusCode = 200
              return res.end(JSON.stringify({ success: true, message: 'Content saved successfully' }))
            } catch (writeErr) {
              res.statusCode = 500
              return res.end(JSON.stringify({ error: 'Failed to save content: ' + writeErr.message }))
            }
          })
          return
        }

        // POST /api/admin/upload
        if (req.url === '/api/admin/upload' && req.method === 'POST') {
          res.setHeader('Content-Type', 'application/json')
          readBody((err, parsed) => {
            if (err || !parsed.dataUrl) {
              res.statusCode = 400
              return res.end(JSON.stringify({ error: 'No dataUrl provided' }))
            }
            try {
              const matches = parsed.dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
              if (!matches || matches.length !== 3) {
                res.statusCode = 400
                return res.end(JSON.stringify({ error: 'Invalid base64 dataUrl' }))
              }

              const ext = matches[1].split('/')[1]?.replace('jpeg', 'jpg') || 'png'
              const rawName = (parsed.filename || `upload-${Date.now()}`).replace(/[^a-zA-Z0-9_-]/g, '_')
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
            } catch (writeErr) {
              res.statusCode = 500
              return res.end(JSON.stringify({ error: 'Upload failed: ' + writeErr.message }))
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
  plugins: [react(), devApiPlugin()],
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
