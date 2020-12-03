import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link) `
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#000000' : '#FFFFFF')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#bb0000' : '#bb0000')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#FFFFFF' : '#bb0000')};
    color: ${({ primary }) => (primary ? '#bb0000' : '#FFFFFF')};
  }
`