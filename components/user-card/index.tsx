import { HTMLElementProps } from 'core';
import { Container, ImageWrapper, InfoHeader, InfoLinks, SubText, Title } from './styles/UserCard';


export default function UserCard({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <Container {...props} customStyle={customStyle}>{children}</Container>;
}

UserCard.ImageWrapper = function UserCardImageWrapper({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <ImageWrapper {...props} customStyle={customStyle}>{children}</ImageWrapper>;
};


UserCard.InfoHeader = function UserCardInfoHeader({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <InfoHeader {...props} customStyle={customStyle}>{children}</InfoHeader>;
};

UserCard.Title = function UserCardTitle({ children, customStyle, ...props }: HTMLElementProps<'h1'>) {
  return <Title {...props} customStyle={customStyle}>{children}</Title>;
};

UserCard.SubText = function UserCardSubText({ children, customStyle, ...props }: HTMLElementProps<'span'>) {
  return <SubText {...props} customStyle={customStyle}>{children}</SubText>;
};

UserCard.InfoLinks = function UserCardInfoLinks({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <InfoLinks {...props} customStyle={customStyle}>{children}</InfoLinks>;
};