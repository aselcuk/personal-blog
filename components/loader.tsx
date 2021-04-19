import { Loader } from 'styled';
import { Loading } from 'styled/icons';
import { css } from 'styled-components';

export default function loader() {
  return (
    <Loader customStyle={css`color: ${({ theme }) => theme.colors.secondaryTextColor};`}>
      <Loading width='72px' height='72px' />
    </Loader>
  );
}
