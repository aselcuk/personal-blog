import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({theme}) => theme.colors.bgColor};
`;