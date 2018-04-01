import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from '../../app/routes';
import { Header, MainLayout } from '../../components';
import HomePage from '../Home';

const App = () => (
  <MainLayout
    content={
      <Router>
        <Route path={routes.home} component={HomePage} />
      </Router>
    }
    header={<Header />}
    footer={<span>2018 &copy; Julius Koronci &lt;jk@web-solutions.sk&gt;</span>}
  />
);

export default App;
