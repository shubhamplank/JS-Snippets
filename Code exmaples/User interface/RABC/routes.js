// Assuming you have components defined somewhere
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Public from './components/Public'

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    role: 'admin',
  },
  {
    path: '/profile',
    component: Profile,
    role: 'user',
  },
  {
    path: '/public',
    component: Public,
    role: 'guest',
  },
  // other routes...
]

export default routes
