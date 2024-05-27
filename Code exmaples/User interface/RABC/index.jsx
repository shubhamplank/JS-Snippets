import React from 'react'
import { Route, Switch } from 'react-router-dom'
import useRBAC from './useRBAC'
import routes from './routes' // Assuming this file contains your route configuration
import UnauthorizedPage from './UnauthorizedPage'

const App = () => {
  return (
    <Switch>
      {routes.map(({ path, component, role }) => {
        const { renderComponent } = useRBAC([role]) // Initialize useRBAC hook with the required role
        const Component = component // Assigning component to a variable with uppercase as it will be JSX element

        return (
          <Route
            key={path}
            path={path}
            render={(props) => renderComponent(<Component {...props} />)} // Spread all props to Component
          />
        )
      })}
      <Route path="/unauthorized" component={UnauthorizedPage} />
    </Switch>
  )
}

export default App
