import React, { useState } from 'react'
import './tab.css'

export default function Tabs({ data }) {
  const [tab, setTab] = useState(0)

  let Component = data[tab].component

  const handleClick = (i) => {
    setTab(i)
  }

  return (
    <div>
      <nav className="nav">
        {data.map((item, index) => (
          <div
            className="tab"
            style={{ backgroundColor: index === tab ? 'grey' : 'white' }}
            onClick={() => handleClick(index)}
          >{`${item.tab}`}</div>
        ))}{' '}
      </nav>

      <div className="body">
        <Component />
      </div>
    </div>
  )
}
