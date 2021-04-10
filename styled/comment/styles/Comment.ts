import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 8px 30px 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 70%;

  @media (max-width: 42rem) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  margin-bottom: 5px;

  ${({ customStyle }) => customStyle};
`;

export const ImageWrapper = styled.div`
    width: 36px;
    height: 36px;

    img {
      border-radius: 99px;
    }
`;

export const Title = styled.h5`
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const SubText = styled.span`
  font-size: 11px;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.subTextColor};
  cursor: pointer;

  ${({ customStyle }) => customStyle};
`;

export const TextArea = styled.textarea`
  border: none;
  border-radius: 8px;
  margin-bottom: 10px;
  resize: vertical;
  outline: none;
  padding: 8px 0 0 8px;
  width: 100%;
`;

export const UserComment = styled.p`
  font-size: 14px;
  margin: 5px 0;
  color: ${({ theme }) => theme.colors.primaryTextColor};
`;