import React from 'react'
import './style.css'
import Tabs from './Tabs'

const Home = () => <div> Home </div>
const About = () => <div> About </div>

// const data = [Home, About];

const data = [
  { tab: 'Home', component: Home },
  { tab: 'Tab 2', component: About },
]

export default function App() {
  return (
    <div>
      Tabs Component
      <Tabs data={data} />
    </div>
  )
}
