import React from 'react'
import { useParams } from 'react-router-dom'

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

const ItemDetail = () => {
  const { id } = useParams()
  const item = itemsData.find((item) => item.id === parseInt(id))

  if (!item) {
    return <div>Item not found</div>
  }

  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Category: {item.category}</p>
    </div>
  )
}

export default ItemDetail
