import styled from '../../../theme/theme';

/** @component */
export const Wrapper = styled.div`
  text-align: center;
`;

/** @component */
export const Header = styled.header`
  background-color: ${props => props.theme.colors.black};
  height: 150px;
  padding: 20px;
  color: ${props => props.theme.colors.white};
`;

/** @component */
export const Content = styled.section`
  font-size: large;
  padding: 10px;
  text-align: center;
  width: 100%;
  height: 100%;
`;

/** @component */
export const Footer = styled.footer`
  color: ${props => props.theme.colors.grey};
  padding: 10px;
`;
