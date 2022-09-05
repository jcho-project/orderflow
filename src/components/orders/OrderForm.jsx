import Button from "../shared/Button"
import { useContext, useEffect } from "react"
import OrderContext from "../../context/OrderContext"

function OrderForm() {
  const { orders, searchOrder } = useContext(OrderContext)

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
              </tr>
            </thead>
            <tbody>
              {orders.map(order => {
                return (
                  <tr key={order.id}>
                    <td>
                      <input type="checkbox" name="select" />
                    </td>
                    {columns.map(column => {
                      return <td key={column.accessor}>{order[column.accessor]}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    }
  }

  return (
    <Table orders={orders} columns={columns} />
  )
}

export default OrderForm