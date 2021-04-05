import { Divider } from 'styled';
import styled from 'styled-components';
import theme from 'prism-react-renderer/themes/vsDark';
import Highlight, { defaultProps } from 'prism-react-renderer';

export const mdxComponents = {
  Divider,
  a: props => <a style={{ color: 'blue', fontWeight: 500 }} target='_blank' {...props} />,
  code: props => renderCodeBlock(props),
  img: props => renderImage(props),
  inlineCode: props => renderInlineCodeBlock(props)
};

const MDXImage = styled.img`
  @media (max-width: 42rem) {
    max-width: 100%;
  }
`;

const renderImage = (props) => {
  return <MDXImage {...props} />;
};

const renderInlineCodeBlock = ({ children }) => {
  return (
    <code style={{ backgroundColor: '#ebeaef', borderRadius: '4px', color: '#000', lineHeight: '30px', padding: '2px 4px' }}>{children}</code>
  );
};

const renderCodeBlock = ({ children, className }) => {

  const lang = className.split('-')[1];

  return (
    <Highlight {...defaultProps} theme={theme} code={children} language={lang}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, borderRadius: '8px', padding: '10px 20px' }}>
          {tokens.map((line, i) => {

            if ((tokens.length - 1 === i) && line.length === 1) {
              return '';
            }

            return (
              <div key={i} {...getLineProps({ key: i, line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ key, token })} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};