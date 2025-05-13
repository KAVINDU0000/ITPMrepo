// src/store/sessionStore.js
import create from 'zustand';

const useSessionStore = create((set) => ({
  activeEmail: null,
  setActiveEmail: (email) => set({ activeEmail: email }),
}));

export default useSessionStore;
