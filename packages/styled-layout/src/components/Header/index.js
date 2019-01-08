import styled from 'styled-components';

const Header = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || 'black' };
  color: ${({ color }) => color || 'white' };
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2em;
  padding: 15px 0;
`;

export {
  Header,
};