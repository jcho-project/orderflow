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

  {/* <div className="input-container">
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
  </div> */}

  return (
    <>
      <form action="#" method="GET" className="hidden lg:block lg:pl-2">
      <label className="sr-only">Search</label>
      <div className="relative mt-1 lg:w-96">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg>
        </div>
        <input type="text" name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" />
      </div>
      </form>
    </>
  );
}

export default OrderInput;
