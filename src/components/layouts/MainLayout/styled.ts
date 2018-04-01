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
export const Content = styled.div`
  font-size: large;
  padding: 10px;
`;

/** @component */
export const Footer = styled.div`
  color: ${props => props.theme.colors.grey};
  padding: 10px;
`;
