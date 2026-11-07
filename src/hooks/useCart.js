import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const memoryStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {}
}

const safeStorage = createJSONStorage(() => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage
  }
  return memoryStorage
})

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => set((state) => {
        const existing = state.items.find(item => item.id === product.id)
        if (existing) {
          return {
            items: state.items.map(item =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          }
        }
        return {
          items: [...state.items, { ...product, quantity: 1 }]
        }
      }),

      removeItem: (productId) => set((state) => ({
        items: state.items.filter(item => item.id !== productId)
      })),

      updateQuantity: (productId, quantity) => set((state) => ({
        items: state.items.map(item =>
          item.id === productId ? { ...item, quantity } : item
        ).filter(item => item.quantity > 0)
      })),

      clearCart: () => set({ items: [] }),

      getTotal: () => {
        const state = get()
        return state.items.reduce((total, item) => {
          const price = typeof item.price === 'number' ? item.price : 0
          return total + (price * item.quantity)
        }, 0)
      },

      getItemCount: () => {
        const state = get()
        return state.items.reduce((count, item) => count + item.quantity, 0)
      }
    }),
    {
      name: 'aviory_selection_v1',
      storage: safeStorage
    }
  )
)

export default useCartStore
