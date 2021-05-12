import { css } from 'styled-components';
import { Loader } from 'styled';
import { Loading } from 'styled/icons';

export default function loader() {
  return (
    <Loader customStyle={css`color: ${({ theme }) => theme.colors.secondaryTextColor};`}>
      <Loading width='72px' height='72px' />
    </Loader>
  );
}
