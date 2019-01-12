import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  color: ${({ color }) => color || 'black' };
  width: ${({ wide }) => wide ? '50%' : '120px' };
  border: 1px solid ${({ color }) => color || 'black' };
  background-color: ${({ backgroundColor }) => backgroundColor };
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.2em;
  padding: 8px;
  margin: 8px;
  
  &:focus {
    outline: none;
  }
`;

Button.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  wide: PropTypes.bool,
};

export {
  Button,
};