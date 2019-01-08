import styled from 'styled-components';

const Header = styled.h1`
  color: ${props => props.color || 'green'}
`;

export {
    Header,
};