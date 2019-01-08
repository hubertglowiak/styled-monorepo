import styled from 'styled-components';

const Button = styled.button`
  color: ${({ color }) => color || 'black' };
  width: ${({ wide }) => wide ? '50%' : '120px' };
  border: 1px solid ${({ color }) => color || 'black' };
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.2em;
  padding: 8px;
  margin: 8px;
  
  &:focus {
    outline: none;
  }
`;

export {
  Button,
};