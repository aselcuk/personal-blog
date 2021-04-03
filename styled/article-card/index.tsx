import React from 'react';
import { Container, Content, ContentWrapper, DetailTitle, Header, SubText, Summary, Title } from './styles/ArticleCard';
import { HTMLElementProps, HTMLElementPropsWithRef } from 'core';


export default function ArticleCard({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <Container {...props} customStyle={customStyle}>{children}</Container>;
}

ArticleCard.Header = function ArticleCardHeader({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <Header {...props} customStyle={customStyle}>{children}</Header>;
};

ArticleCard.ContentWrapper = function ArticleCardContentWrapper({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <ContentWrapper {...props} customStyle={customStyle}>{children}</ContentWrapper>;
};

ArticleCard.Content = function ArticleCardContent({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <Content {...props} customStyle={customStyle}>{children}</Content>;
};

ArticleCard.Summary = function ArticleCardSummary({ children, customStyle, ...props }: HTMLElementProps<'span'>) {
  return <Summary {...props} customStyle={customStyle}>{children}</Summary>;
};

ArticleCard.Title = React.forwardRef(({ children, customStyle, ...props }: HTMLElementPropsWithRef<'h3'>, ref) => {
  return <Title ref={ref} {...props} customStyle={customStyle}>{children}</Title>;
});

ArticleCard.DetailTitle = function ArticleCardDetailTitle({ children, customStyle, ...props }: HTMLElementProps<'h1'>) {
  return <DetailTitle {...props} customStyle={customStyle}>{children}</DetailTitle>;
};

ArticleCard.SubText = function ArticleCardSubText({ children, customStyle, ...props }: HTMLElementProps<'span'>) {
  return <SubText {...props} customStyle={customStyle}>{children}</SubText>;
};