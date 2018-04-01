import * as Loadable from 'react-loadable';
import { Loader } from '../../components';

const NotFound = Loadable({
  delay: 1000,
  loader: () => import('./NotFound'),
  loading: Loader,
});

export default NotFound;
