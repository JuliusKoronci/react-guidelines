import * as React from 'react';
import { Link } from 'react-router-dom';
import { H1, Logo } from '../..';

export interface IProps {
  pathToHome?: string;
}

const Header = ({ pathToHome = '/' }: IProps) => (
  <div>
    <Link to={pathToHome}>
      <Logo />
    </Link>
    <H1>Welcome to React</H1>
  </div>
);

export default Header;
