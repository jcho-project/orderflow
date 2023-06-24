import { useContext, useState } from 'react';
import OrderContext from '../../context/OrderContext';

function OrderInput() {
  const [searchValue, setSearchValue] = useState('');

  const { searchOrder } = useContext(OrderContext);

  const handleSearch = (e) => {
    e.preventDefault();
    searchOrder(searchValue);
    setSearchValue('');
  };

  return (
    <div className="input-container">
      <div className="input-group">
        <div className="order-number">
          <form onSubmit={handleSearch}>
            <div className="sub-heading">Sales Order Number</div>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderInput;
