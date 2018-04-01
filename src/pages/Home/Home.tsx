import * as React from 'react';
import { Header, MainLayout } from '../../components';

const HomePage = () => (
  <MainLayout
    content={<span>Deutsche Bank Style Guide Implementation</span>}
    header={<Header />}
    footer={<span>&copy; Julius Koronci jk@web-solutions.sk</span>}
  />
);

export default HomePage;
