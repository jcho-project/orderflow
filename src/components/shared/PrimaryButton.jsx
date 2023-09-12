import PropTypes from 'prop-types';

function PrimaryButton({ children, type, customClass }) {
  return (
    <button type={type} className={`${customClass} py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-opacity-75`}>
      {children}
    </button>
  );
}

PrimaryButton.defaultProps = {
  type: 'button',
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default PrimaryButton;
