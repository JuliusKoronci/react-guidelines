/* tslint:disable:jsx-no-lambda */
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import routes from '../../app/routes';
import { Header, MainLayout } from '../../components';
import HomePage from '../Home';
import NotFound from '../NotFound';

const App = () => (
  <MainLayout
    content={
      <Router>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={3000}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route exact={true} path={routes.home} component={HomePage} />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    }
    header={<Header />}
    footer={<span>2018 &copy; Julius Koronci &lt;jk@web-solutions.sk&gt;</span>}
  />
);

export default App;
