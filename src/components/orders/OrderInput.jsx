import { useContext, useState } from 'react';

import OrderContext from '../../context/OrderContext';

function OrderInput() {
  const [searchValue, setSearchValue] = useState("");

  const { getOrders, orderList, setOrderList } = useContext(OrderContext);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue === "") {
      getOrders()
    } else {  
      const filteredOrders = orderList.filter((order) => order["bill-to"].toUpperCase() === searchValue.toUpperCase())
  
      setOrderList(filteredOrders)
    }
  };

  const handleSearchChange = (e) => {
    e.preventDefault();

    const searchInput = e.target.value

    if (searchInput === "") {
      getOrders()
    } else {
      setSearchValue(searchInput)
    }
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit} className="hidden lg:block lg:pl-2">
        <label className="sr-only">Search</label>
        <div className="relative flex mt-1 lg:w-96">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg>
          </div>
          <input onChange={handleSearchChange} type="text" name="search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full pl-10 p-2.5" placeholder="Search Order" />
        </div>
      </form>
    </>
  );
}

export default OrderInput;
