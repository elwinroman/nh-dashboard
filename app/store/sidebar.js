import { create } from 'zustand'

export const useSidebarStore = create((set) => ({
  toggle: true,
  updateToggle: (newState) => {
    set({
      toggle: newState
    })
  }
}))
