/* tslint:disable:jsx-no-lambda */
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '../../app/routes';
import { Header, MainLayout } from '../../components';
import ContactPage from '../Contact';
import HomePage from '../Home';
import NotFound from '../NotFound';

const App = () => (
  <Router>
    <MainLayout
      content={
        <Switch>
          <Route exact={true} path={routes.home} component={HomePage} />
          <Route path={routes.contact} component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      }
      header={<Header pathToHome={routes.home} />}
      footer={
        <span>2018 &copy; Julius Koronci &lt;jk@web-solutions.sk&gt;</span>
      }
    />
  </Router>
);

export default App;
