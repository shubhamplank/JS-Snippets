import React, { useState, useEffect } from 'react'

function InfiniteScrollComponent() {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const fetchItems = async () => {
    setLoading(true)
    // Simulating an API call
    const response = await fetch(`https://api.example.com/items?page=${page}`)
    const data = await response.json()
    setItems((prevItems) => [...prevItems, ...data.items])
    setPage((prevPage) => prevPage + 1)
    setLoading(false)
  }

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    )
      return
    fetchItems()
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    fetchItems()
  }, [])

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      {loading && <div>Loading...</div>}
    </div>
  )
}

export default InfiniteScrollComponent

function ScrollComponent() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <h1 style={{ position: 'fixed', top: '10px', left: '10px' }}>
        Scroll position: {scrollPosition}
      </h1>
      <div style={{ height: '2000px', background: '#f0f0f0' }}>
        Scroll down to see the effect
      </div>
    </div>
  )
}
