import { describe, it, expect, beforeEach } from 'vitest'
import useCartStore from './useCart'

describe('useCartStore', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart()
  })

  it('adds items to the selection cart', () => {
    useCartStore.getState().addItem({ id: 'fj-001', name: 'Sapphire Ring', price: 12500 })
    const items = useCartStore.getState().items
    expect(items.length).toBe(1)
    expect(items[0].quantity).toBe(1)
    expect(items[0].name).toBe('Sapphire Ring')
  })

  it('increments quantity when existing item is added', () => {
    useCartStore.getState().addItem({ id: 'fj-001', name: 'Sapphire Ring', price: 12500 })
    useCartStore.getState().addItem({ id: 'fj-001', name: 'Sapphire Ring', price: 12500 })
    const items = useCartStore.getState().items
    expect(items.length).toBe(1)
    expect(items[0].quantity).toBe(2)
  })

  it('calculates total and item count correctly', () => {
    useCartStore.getState().addItem({ id: 'fj-001', name: 'Sapphire Ring', price: 12000 })
    useCartStore.getState().addItem({ id: 'fj-002', name: 'Diamond Pendant', price: 8000 })
    expect(useCartStore.getState().getItemCount()).toBe(2)
    expect(useCartStore.getState().getTotal()).toBe(20000)
  })

  it('removes item correctly', () => {
    useCartStore.getState().addItem({ id: 'fj-001', name: 'Sapphire Ring', price: 12000 })
    useCartStore.getState().removeItem('fj-001')
    expect(useCartStore.getState().items.length).toBe(0)
  })
})
