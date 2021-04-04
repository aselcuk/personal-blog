import theme from 'prism-react-renderer/themes/vsDark';
import Highlight, { defaultProps } from 'prism-react-renderer';

export const mdxComponents = {
  code: props => renderCodeBlock(props),
  inlineCode: props => renderInlineCodeBlock(props)
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