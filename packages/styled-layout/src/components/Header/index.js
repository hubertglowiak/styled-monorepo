import styled from 'styled-components';
import PropTypes from 'prop-types';

const Header = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || 'black' };
  color: ${({ color }) => color || 'white' };
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 2em;
  padding: 15px 0;
`;

Header.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export {
  Header,
};