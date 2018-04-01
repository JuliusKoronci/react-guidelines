import styled, { keyframes } from '../../../theme/theme';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

/** @component */
export const Img = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 80px;
`;
