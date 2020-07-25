import {Home, User} from './components';
import {path} from './app.path.js'

export const routes = [
  {name: 'Home', path: path.home, component: Home},
  {name: 'User', path: path.user, component: User}
];