import Button from "./shared/Button"
import { useContext } from "react"
import OrderContext from "../context/OrderContext"

function OrderForm() {

  const { orders } = useContext(OrderContext)

  const columns = [
    { accessor: "id", label: "id" },
    { accessor: "model", label: "Model" },
    { accessor: "quantity", label: "Quantity" },
    // { accessor: "price", label: "Price", format: value => (value ? "✔️" : "✖️") },
    { accessor: "price", label: "Price"},
    { accessor: "line_status", label: "Line Status" },
  ]

  const renderTbody = (item) => {
    if (item === "") {
      return <tbody></tbody>
    } else {
      return (
        <tbody>
          {orders.map(order => {
            return (
              <tr key={order.id}>
                {columns.map(column => {
                  return <td key={column.accessor}>{order[column.accessor]}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      )
    }
  }

  const Table = ({ columns, orders }) => {
      return (
        <table>
          <thead>
            <tr>
              {columns.map(column => {
                return <th key={column.accessor}>{column.label}</th>
              })}
            </tr>
          </thead>
          {renderTbody(orders)}
          {/* <tbody>
              {orders.map(order => {
                return (
                  <tr key={order.id}>
                    {columns.map(column => {
                      return <td key={column.accessor}>{order[column.accessor]}</td>
                    })}
                  </tr>
                )
              })}
          </tbody> */}
        </table>
      )
  }

  return (
    <>
      <div className="container">
        <Table orders={orders} columns={columns} />
      </div>
      <div className="controls">
        <Button>Upload</Button>
        <Button>Export</Button>
        <Button type="submit" >Save</Button>
      </div>
    </>
  )
}

export default OrderForm