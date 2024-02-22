import { About } from '../pages/About';
import { Main } from '../pages/Main';
import { Route } from './components/Route';
import { Router } from './components/Router';

export const RouterComponent = () => {
  return (
    <Router>
      <Route
        path="/"
        component={<Main />}
      />
      <Route
        path="/about"
        component={<About />}
      />
    </Router>
  );
};
