import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 10px 20px;
  margin: 30px 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.cardBgColor};
  transition: background-color .1s linear;

  ${({ theme }) => !theme.isDark && css`
    -webkit-box-shadow: 0px 0px 1px 0px ${theme.colors.borderColor};
    -moz-box-shadow: 0px 0px 1px 0px ${theme.colors.borderColor};
    box-shadow: 0px 0px 1px 0px ${theme.colors.borderColor};
    transition: all .1s linear;
  `
  }
  
  ${({ customStyle }) => customStyle};
`;

export const ImageWrapper = styled.div`
    width: 68px;
    height: 68px;

    img {
      border-radius: 99px;
      border: 1px solid ${({ theme }) => theme.colors.borderColor};
      transition: all .1s linear;
    }

    ${({ theme }) => theme.isDark && css`
      filter: sepia(0.3);
      transition: filter .1s linear;
    `
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 40rem) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryTextColor};
  transition: color .1s linear;
`;

export const SubText = styled.span`
  font-size: 12px;
  margin-top: 2px;
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.subTextColor};
  transition: color .1s linear;

  @media (max-width: 40rem) {
    margin-left: unset;
  }
`;

export const InfoLinks = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  a {
    &:last-child {
      margin-left: 10px;
    }
  }
`;

export const InfoLinkItem = styled.a`
  svg {
    color: ${({ theme }) => theme.colors.primaryTextColor};

    &:hover {
      color: ${({ theme }) => theme.colors.secondaryTextColor};
    }

    transition: color .1s linear;
  }
`;