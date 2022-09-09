import { useContext, useEffect } from "react"
import OrderContext from "../../context/OrderContext"
import { FaEdit } from "react-icons/fa"
import OrderItem from "./OrderItem"

function OrderForm() {
  const { orders, searchOrder, editOrder } = useContext(OrderContext)

  useEffect(() => {
    searchOrder("")
  }, [])

  const columns = [
    { accessor: "id", label: "id" },
    { accessor: "bill-to", label: "Bill-To" },
    { accessor: "ship-to", label: "Ship-To" },
    { accessor: "model", label: "Model" },
    { accessor: "quantity", label: "Quantity" },
    { accessor: "price", label: "Price"},
    { accessor: "customer_po", label: "Customer PO"},
    { accessor: "line_status", label: "Line Status" },
    // { accessor: "price", label: "Price", format: value => (value ? "✔️" : "✖️") },
  ]

  const Table = ({ columns, orders }) => {
    if (orders === "") {
      return <tbody></tbody>
    } else {
      return (
        <div className="container">
          <table>
            <thead>
              <tr>
                {columns.map(column => {
                  return <th key={column.accessor}>{column.label}</th>
                })}
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {/* {orders.map(order => {
                return (
                  <tr key={order.id}>
                    {columns.map(column => {
                      return <td key={column.accessor}>{order[column.accessor]}</td>
                      })}
                    <button onClick={() => editOrder()}>
                      <td><FaEdit /></td>
                    </button>
                  </tr>
                )
              })} */}
              {orders.map((item) => {
                <OrderItem item={item} />
              })}
            </tbody>
          </table>
        </div>
      )
    }
  }

  return (
    // <Table orders={orders} columns={columns} />
    <>
      <table>
        <thead>
          <tr>
            {columns.map(column => {
              return <th key={column.accessor}>{column.label}</th>
            })}
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <OrderItem item={orders} />
          {/* {orders.map((item) => {
            <OrderItem item={item} />
          })} */}
        </tbody>
      </table>
    </>
  )
}

export default OrderForm