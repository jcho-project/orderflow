import { useContext, useEffect } from "react"
import OrderContext from "../../context/OrderContext"
import OrderItem from "./OrderItem"

function OrderList() {
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

  return (
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
          <OrderItem items={orders} />
        </tbody>
      </table>
    </>
  )
}

export default OrderList