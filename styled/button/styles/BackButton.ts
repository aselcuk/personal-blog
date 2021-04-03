import styled from 'styled-components/macro';

export const Button = styled.button`
  position: absolute;
  padding: 3px 5px;
  background: ${props => props.theme.colors.bgColor};
  border: none;
  border-radius: 8px;
  display: flex;
  right: 15px;
  top: 15px;
  color: ${props => props.theme.colors.primaryTextColor};
  outline: none;
  cursor: pointer;
`;