import { Button } from 'styled/button/styles/Button';
import styled from 'styled-components/macro';

export const LoginButton = styled(Button)`
  padding: 8px 10px;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  background-color: ${({ theme }) => theme.colors.bgColor};
  border: 1px solid ${({ theme }) => theme.colors.subTextColor};
  border-radius: 8px;
  outline: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryTextColor};
    border: 1px solid ${({ theme }) => theme.colors.secondaryTextColor};
  }
`;