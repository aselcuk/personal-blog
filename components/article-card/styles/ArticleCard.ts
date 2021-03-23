import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 12px 30px;
  margin: 30px 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBgColor};

  ${({ theme }) => !theme.isDark && css`
    -webkit-box-shadow: 0px 0px 1px 0px ${theme.colors.borderColor};
    -moz-box-shadow: 0px 0px 1px 0px ${theme.colors.borderColor};
    box-shadow: 0px 0px 1px 0px ${theme.colors.borderColor};
  `
  }
  
  ${({ customStyle }) => customStyle};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${({ customStyle }) => customStyle};
`;

export const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.secondaryTextColor};

  &:hover {
    filter: blur(1px);
  }

  ${({ customStyle }) => customStyle};
`;

export const Description = styled.span`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.primaryTextColor};

  ${({ customStyle }) => customStyle};
`;

export const SubText = styled.span`
  font-size: 11px;
  white-space: nowrap;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.subTextColor};

  ${({ customStyle }) => customStyle};
`;