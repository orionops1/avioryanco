/**
 * Light Native Fetch API Client
 * Compatible with modern ES modules without external dependencies like axios
 */

const API_BASE_URL = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_BASE_URL) || ''

async function request(endpoint, options = {}) {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  }

  const config = {
    ...options,
    headers
  }

  if (config.body && typeof config.body === 'object' && !(config.body instanceof FormData)) {
    config.body = JSON.stringify(config.body)
  }

  const response = await fetch(url, config)
  const contentType = response.headers.get('content-type')
  const isJson = contentType && contentType.includes('application/json')
  const data = isJson ? await response.json() : await response.text()

  if (!response.ok) {
    const error = new Error(data?.message || data?.error || `HTTP error ${response.status}`)
    error.status = response.status
    error.data = data
    throw error
  }

  return {
    data,
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  }
}

export const apiClient = {
  get: (url, options = {}) => request(url, { ...options, method: 'GET' }),
  post: (url, data, options = {}) => request(url, { ...options, method: 'POST', body: data }),
  put: (url, data, options = {}) => request(url, { ...options, method: 'PUT', body: data }),
  delete: (url, options = {}) => request(url, { ...options, method: 'DELETE' })
}

export default apiClient
