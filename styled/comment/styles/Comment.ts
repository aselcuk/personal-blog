import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;

  @media (max-width: 42rem) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  margin-bottom: 5px;
`;

export const ImageWrapper = styled.div`
    width: 38px;
    height: 38px;

    img {
      border-radius: 99px;
      border: 1px solid ${({ theme }) => theme.colors.borderColor};
    }
`;

export const Title = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export const SubText = styled.span`
  font-size: 11px;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.subTextColor};
  cursor: pointer;
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