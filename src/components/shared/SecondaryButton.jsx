import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function PrimaryButton({ children, type, customClass }) {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/orders')
  }

  return (
    <button type={type} onClick={handleClose} className={`${customClass} py-2 px-4 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 ring-opacity-75`}>
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
