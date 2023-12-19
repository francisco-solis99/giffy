import { createContext, useState, useContext } from "react";

// Context
const GifContext = createContext();

// Provider
function GifProvider({ children }) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([]);

  const value = {
    loading,
    setLoading,
    gifs,
    setGifs
  }

  return (
    <GifContext.Provider value={value}>
      {children}
    </GifContext.Provider>
  )
}

// Custom Hook to use the context
function useGifContext(){
  const context = useContext(GifContext)

  if(!context) {
    throw new Error('useGifContext must be used within a GifProvider')
  }

  return context;
}

// Not export the context itself to avoid direct changes
export { GifProvider, useGifContext}
