import * as React from 'react';
import { CircleLoader } from 'react-spinners';
import { LoaderWrapper } from './styled';

const Loader = () => (
  <LoaderWrapper>
    <CircleLoader color="#D0021B" />
  </LoaderWrapper>
);

export default Loader;
