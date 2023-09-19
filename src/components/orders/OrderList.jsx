import { collection, getDocs } from "firebase/firestore"
import { useContext, useEffect, useState } from 'react';

import { db } from "../../config/firebase"
import OrderContext from '../../context/OrderContext';
import OrderItem from './OrderItem';
import PageTitle from './PageTitle';

function OrderList() {
  const { orderList, getOrders } = useContext(OrderContext);
  
  useEffect(() => {
    getOrders();
  }, []);

  const columns = [
    { accessor: 'id', label: 'id' },
    { accessor: 'bill-to', label: 'Bill-To' },
    { accessor: 'ship-to', label: 'Ship-To' },
    { accessor: 'model', label: 'Model' },
    { accessor: 'quantity', label: 'Quantity' },
    { accessor: 'price', label: 'Price' },
    { accessor: 'customer_po', label: 'Customer PO' },
    { accessor: 'line_status', label: 'Line Status' },
  ];

  return (
    <>
      <div className="overflow-x-auto m-4">
        <PageTitle />
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              {columns.map((column) => {
                return (
                  <th scope="col" className="px-6 py-4" key={column.accessor}>
                    {column.label}
                  </th>
                );
              })}
              <th scope="col" className="px-6 py-4">
                Edit
              </th>
              <th scope="col" className="px-6 py-4">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <OrderItem items={orderList} />
          </tbody>
        </table>
      </div>

      {/* TEMPLATE */}

      {/* Breadcrumbs & Title */}
      <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full mb-1">
            <div className="mb-4">
                <nav className="flex mb-5" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                      <li className="inline-flex items-center">
                        <a href="#" className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                          <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                          Home
                        </a>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                          <a href="#" className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">Orders</a>
                        </div>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                          <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">List</span>
                        </div>
                      </li>
                    </ol>
                </nav>
                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">SALES ORDER INQUIRY</h1>
            </div>

            {/* Searchbar / Icons / Add User */}
            <div className="sm:flex">
                <div className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                    <form className="lg:pr-3" action="#" method="GET">
                      <label htmlFor="users-search" className="sr-only">Search</label>
                      <div className="relative mt-1 lg:w-64 xl:w-96">
                          <input type="text" name="email" id="users-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search for users" />
                      </div>
                    </form>
                </div>
                <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                    <button type="button" data-modal-toggle="add-user-modal" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                        Add Order
                    </button>
                    <a href="#" className="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        <svg className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg>
                        Export
                    </a>
                </div>
            </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                      <tr>
                          <th scope="col" className="p-4">
                              <div className="flex items-center">
                                  <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                  <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                              </div>
                          </th>
                          <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                              ID
                          </th>
                          <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                              BILL-TO
                          </th>
                          <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                              SHIP-TO
                          </th>
                          <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                              MODEL
                          </th>
                          <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                              QUANTITY
                          </th>
                          <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                              PRICE
                          </th>
                          <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                              CUSTOMER-PO
                          </th>
                          <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                              LINE-STATUS
                          </th>
                          <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                              EDIT
                          </th>
                          <th scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                              DELETE
                          </th>
                      </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <td className="w-4 p-4">
                              <div className="flex items-center">
                                  <input id="checkbox-{{ .id }}" aria-describedby="checkbox-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                  <label htmlFor="checkbox-{{ .id }}" className="sr-only">checkbox</label>
                              </div>
                          </td>
                          <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                              <img className="w-10 h-10 rounded-full" src="/images/users/{{ .avatar }}" alt="{{ .name }} avatar" />
                              <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                  <div className="text-base font-semibold text-gray-900 dark:text-white">NAME</div>
                                  <div className="text-sm font-normal text-gray-500 dark:text-gray-400">EMAIL</div>
                              </div>
                          </td>
                          <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">Bill-To Data</td>
                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">Ship-To Data</td>
                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">Model Data</td>
                          <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">Quantity Data</td>
                          <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">Price Data</td>
                          <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">Customer-PO Data</td>
                          <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">Line-Status Data</td>
                          <td className="p-4 space-x-2 whitespace-nowrap">
                              <button type="button" data-modal-toggle="edit-user-modal" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path></svg>
                                  Edit user
                              </button>
                          </td>
                          <td className="p-4 space-x-2 whitespace-nowrap">
                              <button type="button" data-modal-toggle="delete-user-modal" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                  Delete user
                              </button>
                          </td>
                      </tr>  
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderList;
