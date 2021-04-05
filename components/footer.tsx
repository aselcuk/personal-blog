import { css } from 'styled-components';
import { Box, Text } from 'styled';

export default function footer() {
  return (
    <Box
      customStyle={css`
        font-size: 14px;
        padding: 10px;
        color: ${({ theme }) => theme.colors.subTextColor};
        text-align: center;
      `}
    >
      <Text>
        Bu blog projesinin kaynak kodlarına <Text customStyle={css`color: ${({ theme }) => theme.colors.secondaryTextColor}; font-weight: 500;`}>
          <a href='https://github.com/aselcuk/personal-blog' target='_blank'>Github</a>
        </Text> üzerinden ulaşabilirsiniz.
      </Text>
    </Box>
  );
}
