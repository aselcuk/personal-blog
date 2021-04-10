import { HTMLElementProps } from 'core';
import { Container, Form, Header, ImageWrapper, SubText, TextArea, Title } from 'styled/comment/styles/Comment';

export default function Comment({ children, ...props }: HTMLElementProps<'div'>) {
  return <Container {...props}>{children}</Container>;
}

Comment.Form = function CommentForm({ children, ...props }: HTMLElementProps<'form'>) {
  return <Form {...props}>{children}</Form>;
};

Comment.Header = function CommentHeader({ children, ...props }: HTMLElementProps<'div'>) {
  return <Header {...props}>{children}</Header>;
};

Comment.ImageWrapper = function CommentImageWrapper({ children, ...props }: HTMLElementProps<'div'>) {
  return <ImageWrapper {...props}>{children}</ImageWrapper>;
};

Comment.Title = function CommentTitle({ children, ...props }: HTMLElementProps<'h4'>) {
  return <Title {...props}>{children}</Title>;
};

Comment.SubText = function CommentSubText({ children, ...props }: HTMLElementProps<'span'>) {
  return <SubText {...props}>{children}</SubText>;
};

Comment.TextArea = function CommentTextArea({ children, ...props }: HTMLElementProps<'textarea'>) {
  return <TextArea {...props}>{children}</TextArea>;
};