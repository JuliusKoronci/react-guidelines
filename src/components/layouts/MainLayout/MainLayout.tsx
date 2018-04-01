import * as React from 'react';
import { Content, Footer, Header, Wrapper } from './styled';

export interface IProps {
  /** Application body content */
  content: JSX.Element;
  /** Application main header */
  header: JSX.Element;
  /** Application main footer */
  footer: JSX.Element;
}

/**
 * Ensures consistent layout across pages
 *
 * @param {JSX.Element} header applications main header
 * @param {JSX.Element} content applications body
 * @returns {any}
 */
const MainLayout = ({ header, content, footer }: IProps) => (
  <Wrapper>
    <Header>{header}</Header>
    <Content>{content}</Content>
    <Footer>{footer}</Footer>
  </Wrapper>
);

/** @component */
export default MainLayout;
