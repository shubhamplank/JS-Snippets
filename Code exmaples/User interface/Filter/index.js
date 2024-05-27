import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ItemList from './ItemList'
import ItemDetail from './ItemDetail'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category/tech">Tech</Link>
            </li>
            <li>
              <Link to="/category/books">Books</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/category/:category" component={ItemList} />
          <Route path="/item/:id" component={ItemDetail} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the Item Store</p>
  </div>
)

export default App
