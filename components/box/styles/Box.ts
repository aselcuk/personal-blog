import styled from 'styled-components/macro';

export const Container = styled.div`
    ${({ customStyle }) => customStyle};
`;

export const Center = styled.div`
    max-width: 1024px;
    margin: auto;

    ${({ customStyle }) => customStyle};
`;