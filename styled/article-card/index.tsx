import React from 'react';
import { Container, Content, Description, Header, SubText, Title } from './styles/ArticleCard';
import { HTMLElementProps, HTMLElementPropsWithRef } from 'core';


export default function ArticleCard({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <Container {...props} customStyle={customStyle}>{children}</Container>;
}

ArticleCard.Header = function ArticleCardHeader({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <Header {...props} customStyle={customStyle}>{children}</Header>;
};

ArticleCard.Content = function ArticleCardContent({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <Content {...props} customStyle={customStyle}>{children}</Content>;
};

ArticleCard.Description = function ArticleCardDescription({ children, customStyle, ...props }: HTMLElementProps<'span'>) {
  return <Description {...props} customStyle={customStyle}>{children}</Description>;
};

ArticleCard.Title = React.forwardRef(({ children, customStyle, ...props }: HTMLElementPropsWithRef<'h1'>, ref) => {
  return <Title ref={ref} {...props} customStyle={customStyle}>{children}</Title>;
});

ArticleCard.SubText = function ArticleCardSubText({ children, customStyle, ...props }: HTMLElementProps<'span'>) {
  return <SubText {...props} customStyle={customStyle}>{children}</SubText>;
};