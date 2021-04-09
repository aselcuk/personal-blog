import { Divider } from 'styled';
import styled from 'styled-components';
import theme from 'prism-react-renderer/themes/vsDark';
import { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

export const mdxComponents = {
  Divider,
  a: props => <a style={{ color: 'blue', fontWeight: 500 }} target='_blank' {...props} />,
  code: props => <div style={{ position: 'relative' }}>{RenderCodeBlock(props)}</div>,
  img: props => renderImage(props),
  inlineCode: props => renderInlineCodeBlock(props)
};

const MDXImage = styled.img`
  @media (max-width: 42rem) {
    max-width: 100%;
  }
`;

const CopyButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  background-color: #ebeaef;
  border: none;
  border-top-right-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  outline: none;
`;

const renderImage = (props) => {
  return <MDXImage {...props} />;
};

const renderInlineCodeBlock = ({ children }) => {
  return (
    <code style={{ backgroundColor: '#ebeaef', borderRadius: '4px', color: '#000', lineHeight: '30px', padding: '.1em' }}>{children}</code>
  );
};

const RenderCodeBlock = ({ children, className }) => {

  const [copyText, setCopyText] = useState<string>('Kopyala✂️');

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

          <CopyButton className='highlightCopyButton' onClick={() => {
            navigator.clipboard.writeText(children).then(() => {
              // eslint-disable-next-line no-console
              console.log('Async: Copying to clipboard was successful!');

              setCopyText('Kopyalandı😉');
            }).catch((err) => {
              // eslint-disable-next-line no-console
              console.log('Async: Could not copy text: ', err);

              setCopyText('Kopyalanamadı🙁');
            }).finally(() => {

              setTimeout(() => {
                setCopyText('Kopyala✂️');
              }, 1000);

            });
          }}>
            <span>{copyText}</span>
          </CopyButton>
        </pre>
      )}
    </Highlight>
  );
};