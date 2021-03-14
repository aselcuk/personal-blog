import styled from 'styled-components/macro';

export const Container = styled.div`
    border: 1px solid tomato;
    padding: 10px;
    margin: 10px 0;

    ${({ customStyle }) => customStyle};
`;