import Button from "./shared/Button"
import { useContext } from "react"
import OrderContext from "../context/OrderContext"

function OrderForm() {

  const { order } = useContext(OrderContext)

  const rows = [
    { id: 1, model: 'Liz Lemon', quantity: 36, price: 10.50, line_status: 'Booked' },
    { id: 2, model: 'Jack Donaghy', quantity: 40, price: 115.5, line_status: 'Awaiting Shippint' },
    { id: 3, model: 'Tracy Morgan', quantity: 39, price: 125.80, line_status: 'Pending Pre-Billing' },
    { id: 4, model: 'Jenna Maroney', quantity: 40, price: 119.85, line_status: 'Closed' },
    { id: 5, model: 'Kenneth Parcell', quantity: 18, price: 76.45, line_status: 'Awaiting Shipping' },
    { id: 6, model: 'Pete Hornberger', quantity: 28, price: 13.57, line_status: 'Booked' },
    { id: 7, model: 'Frank Rossitano', quantity: 36, price: 67.85, line_status: "Entered" },
    { id: 8, model: 'Havier Romano', quantity: 80, price: 80.50, line_status: "Booked" },
  ]

  const columns = [
    { accessor: 'model', label: 'Model' },
    { accessor: 'quantity', label: 'Quantity' },
    // { accessor: 'price', label: 'Price', format: value => (value ? '✔️' : '✖️') },
    { accessor: 'price', label: 'Price'},
    { accessor: 'line_status', label: 'Line Status' },
  ]

  const Table = ({ columns, rows }) => {
    return (
      <table>
        <thead>
          <tr>
            {columns.map(column => {
              return <th key={column.accessor}>{column.label}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => {
            return (
              <tr key={row.id}>
                {columns.map(column => {
                  if (column.format) {
                    return <td key={column.accessor}>{column.format(row[column.accessor])}</td>
                  }
                  return <td key={column.accessor}>{row[column.accessor]}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  return (
    <>
      <div className="container">
        <Table rows={rows} columns={columns} />
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