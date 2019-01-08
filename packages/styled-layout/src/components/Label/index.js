import styled from 'styled-components';

const Label = styled.span`
  color: ${({ color }) => color || 'black' };
  font-size: 1.4em;
`;

export {
  Label,
};