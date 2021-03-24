import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 10px 20px;
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

export const ImageWrapper = styled.div`
    width: 80px;
    height: 80px;

    img {
      width: 80px;
      height: 80px;
      border-radius: 99px;

      ${({ theme }) => theme.isDark && css`
        border: 1px solid ${theme.colors.borderColor};
      `
      }
    }
`;

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const SubText = styled.span`
  font-size: 12px;
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.subTextColor};
`;

export const InfoLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  svg {
    color: ${({ theme }) => theme.colors.primaryTextColor};

    &:last-child {
      margin-left: 10px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.secondaryTextColor};
    }
  }
`;