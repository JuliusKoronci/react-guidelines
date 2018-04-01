import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../../app/routes';
import { Header, MainLayout } from '../../components';
import HomePage from '../Home';
import NotFound from '../NotFound';

const App = () => (
  <MainLayout
    content={
      <Router>
        <Switch>
          <Route exact={true} path={routes.home} component={HomePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    }
    header={<Header />}
    footer={<span>2018 &copy; Julius Koronci &lt;jk@web-solutions.sk&gt;</span>}
  />
);

export default App;
