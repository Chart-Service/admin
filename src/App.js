import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from './routes/routes';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

const App = () => (
  <Router>
    <div>
      <Link to="/" />

      {routes.map(route => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
    </div>
  </Router>
);

export default App;
