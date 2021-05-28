import { useState } from 'react'

const getLocalStorageItem = (value) => {
  const [nodes] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(value)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : []
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })
  return nodes
}

export default getLocalStorageItem
