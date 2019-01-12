import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.span`
  color: ${({ color }) => color || 'black' };
  font-size: 1.4em;
`;

Label.propTypes = {
  color: PropTypes.string,
};

export {
  Label,
};