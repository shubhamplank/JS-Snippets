const initialItems = [
  {
    id: 1,
    name: 'Item 1',
    category: 'Category A',
    color: 'red',
  },
  { id: 2, name: 'Item 2', category: 'Category B', color: 'blue' },
  { id: 3, name: 'Item 3', category: 'Category A', color: 'green' },
  { id: 4, name: 'Item 4', category: 'Category C', color: 'red' },
]

let element = initialItems.map((item, index) => {
  return <li> {item.name} </li>
})

document.getElementById('hello').innerText = <h1>hi </h1>
console.log(document.getElementById('hello').innerText)
