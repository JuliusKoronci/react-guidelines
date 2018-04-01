import * as Loadable from 'react-loadable';
import { Loader } from '../../components';

const HomePage = Loadable({
  delay: 1000,
  loader: () => import('./Home'),
  loading: Loader,
});

export default HomePage;
