import { HTMLElementProps } from 'core';
import { Container, ImageWrapper, InfoHeader, InfoLinks, SubTitle, Title } from './styles/UserCard';


export default function UserCard({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <Container {...props} customStyle={customStyle}>{children}</Container>;
}

UserCard.ImageWrapper = function UserCardImageWrapper({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <ImageWrapper {...props} customStyle={customStyle}>{children}</ImageWrapper>;
};


UserCard.InfoHeader = function UserCardInfoHeader({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <InfoHeader {...props} customStyle={customStyle}>{children}</InfoHeader>;
};

UserCard.Title = function UserCardTitle({ children, customStyle, ...props }: HTMLElementProps<'span'>) {
  return <Title {...props} customStyle={customStyle}>{children}</Title>;
};

UserCard.SubTitle = function UserCardSubTitle({ children, customStyle, ...props }: HTMLElementProps<'span'>) {
  return <SubTitle {...props} customStyle={customStyle}>{children}</SubTitle>;
};

UserCard.InfoLinks = function UserCardInfoLinks({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <InfoLinks {...props} customStyle={customStyle}>{children}</InfoLinks>;
};