import { HTMLElementProps } from 'core';
import { Container, Form, Header, ImageWrapper, SubText, TextArea, Title, UserComment } from 'styled/comment/styles/Comment';

export default function Comment({ children, ...props }: HTMLElementProps<'div'>) {
  return <Container {...props}>{children}</Container>;
}

Comment.Form = function CommentForm({ children, ...props }: HTMLElementProps<'form'>) {
  return <Form {...props}>{children}</Form>;
};

Comment.Header = function CommentHeader({ children, customStyle, ...props }: HTMLElementProps<'div'>) {
  return <Header {...props} customStyle={customStyle}>{children}</Header>;
};

Comment.ImageWrapper = function CommentImageWrapper({ children, ...props }: HTMLElementProps<'div'>) {
  return <ImageWrapper {...props}>{children}</ImageWrapper>;
};

Comment.Title = function CommentTitle({ children, ...props }: HTMLElementProps<'h4'>) {
  return <Title {...props}>{children}</Title>;
};

Comment.SubText = function CommentSubText({ children, customStyle, ...props }: HTMLElementProps<'span'>) {
  return <SubText {...props} customStyle={customStyle}>{children}</SubText>;
};

Comment.TextArea = function CommentTextArea({ children, ...props }: HTMLElementProps<'textarea'>) {
  return <TextArea {...props}>{children}</TextArea>;
};

Comment.UserComment = function CommentUserComment({ children, ...props }: HTMLElementProps<'p'>) {
  return <UserComment {...props}>{children}</UserComment>;
};