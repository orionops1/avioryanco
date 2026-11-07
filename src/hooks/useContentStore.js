import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { defaultSiteContent } from '../data/defaultSiteContent'

// Deep merge helper to ensure defaults always provide fallbacks for missing keys
function deepMerge(target, source) {
  const output = { ...target }
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          output[key] = source[key]
        } else {
          output[key] = deepMerge(target[key], source[key])
        }
      } else {
        if (target[key] === undefined || target[key] === null) {
          output[key] = source[key]
        }
      }
    })
  }
  return output
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

export const useContentStore = create(
  persist(
    (set, get) => ({
      content: defaultSiteContent,
      isLoading: false,
      isSaving: false,
      lastSaved: null,
      error: null,

      // Fetch latest content from backend API (/api/admin/content)
      fetchContent: async () => {
        set({ isLoading: true, error: null })
        try {
          const res = await fetch('/api/admin/content')
          if (!res.ok) {
            throw new Error(`Failed to load content (${res.status})`)
          }
          const serverData = await res.json()
          // Merge server data over defaults to guarantee all fields exist
          const merged = deepMerge(serverData, defaultSiteContent)
          set({ content: merged, isLoading: false })
          return { success: true, content: merged }
        } catch (err) {
          console.warn('[useContentStore] Failed to fetch server content, using local/default:', err)
          set({ isLoading: false, error: err.message })
          return { success: false, error: err.message }
        }
      },

      // Update a specific section (e.g. 'hero', 'expressions', 'proposalSection')
      updateSection: (sectionKey, sectionData) => {
        set((state) => ({
          content: {
            ...state.content,
            [sectionKey]: {
              ...state.content[sectionKey],
              ...sectionData
            }
          }
        }))
      },

      // Set entire content
      setContent: (newContent) => {
        set({ content: newContent })
      },

      // Upload an image via /api/admin/upload (returns URL)
      uploadImage: async (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = async () => {
            const dataUrl = reader.result
            try {
              const res = await fetch('/api/admin/upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  dataUrl,
                  filename: file.name
                })
              })

              if (!res.ok) {
                throw new Error(`Upload server error (${res.status})`)
              }

              const result = await res.json()
              resolve({
                success: true,
                url: result.url,
                filename: result.filename
              })
            } catch (err) {
              console.warn('[useContentStore] Server upload failed, using DataURL fallback:', err)
              // Resilient fallback: return base64 DataURL directly so image works in preview
              resolve({
                success: true,
                url: dataUrl,
                filename: file.name,
                isFallback: true
              })
            }
          }
          reader.onerror = () => reject(new Error('Failed to read file'))
          reader.readAsDataURL(file)
        })
      },

      // Save changes to backend disk & persist
      saveToBackend: async () => {
        set({ isSaving: true, error: null })
        try {
          const content = get().content
          const res = await fetch('/api/admin/content', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(content, null, 2)
          })

          if (!res.ok) {
            throw new Error(`Server returned error (${res.status})`)
          }

          const result = await res.json()
          set({ isSaving: false, lastSaved: new Date().toISOString() })
          return { success: true, result }
        } catch (err) {
          console.error('[useContentStore] Error saving content to backend:', err)
          set({ isSaving: false, error: err.message })
          return { success: false, error: err.message }
        }
      },

      // Reset content to default
      resetToDefaults: async () => {
        set({ content: defaultSiteContent, isSaving: true })
        try {
          await fetch('/api/admin/content', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(defaultSiteContent, null, 2)
          })
          set({ isSaving: false, lastSaved: new Date().toISOString() })
          return { success: true }
        } catch (err) {
          set({ isSaving: false })
          return { success: false, error: err.message }
        }
      }
    }),
    {
      name: 'aviory_site_content_v1',
      partialize: (state) => ({ content: state.content, lastSaved: state.lastSaved })
    }
  )
)
