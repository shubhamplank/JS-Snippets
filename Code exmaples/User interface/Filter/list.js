import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const itemsData = [
  {
    id: 1,
    title: 'Laptop',
    category: 'tech',
    description: 'A powerful laptop for developers',
  },
  {
    id: 2,
    title: 'Book',
    category: 'books',
    description: 'Bestseller book by famous author',
  },
  {
    id: 3,
    title: 'Smartphone',
    category: 'tech',
    description: 'Latest smartphone with great features',
  },
  {
    id: 4,
    title: 'Magazine',
    category: 'books',
    description: 'Monthly magazine subscription',
  },
]

const ItemList = () => {
  const { category } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    if (category) {
      const filteredItems = itemsData.filter(
        (item) => item.category === category
      )
      setItems(filteredItems)
    } else {
      setItems(itemsData)
    }
  }, [category])

  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>
              <strong>{item.title}</strong> - {item.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList
