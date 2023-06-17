import PropTypes from 'prop-types';

function Button({ children, version, type }) {
  return (
    <button type={type} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
