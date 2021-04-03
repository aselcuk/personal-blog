import styled, { css } from 'styled-components/macro';

export const Container = styled.article`
  display: flex;
  padding: 12px 30px;
  margin: 30px 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBgColor};
  transition: background-color .2s linear;

  ${({ theme }) => !theme.isDark && css`
    -webkit-box-shadow: 0px 0px 1px 0px ${theme.colors.borderColor};
    -moz-box-shadow: 0px 0px 1px 0px ${theme.colors.borderColor};
    box-shadow: 0px 0px 1px 0px ${theme.colors.borderColor};
  `
  }
  
  ${({ customStyle }) => customStyle};
`;

export const Header = styled.div`
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${({ customStyle }) => customStyle};
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  transition: color .2s linear;
  cursor: pointer;

  &:hover {
    filter: blur(1px);
  }

  ${({ customStyle }) => customStyle};
`;

export const Summary = styled.p`
  margin: 0;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  transition: color .2s linear;

  ${({ customStyle }) => customStyle};
`;

export const SubText = styled.span`
  font-size: 11px;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.subTextColor};
  transition: color .2s linear;

  ${({ customStyle }) => customStyle};
`;