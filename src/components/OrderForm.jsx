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

  // const Table = ({ columns, rows }) => {
  //   return (
  //     <table>
  //       <thead>
  //         <tr>
  //           {columns.map(column => {
  //             return <th key={column.accessor}>{column.label}</th>
  //           })}
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {rows.map(row => {
  //           return (
  //             <tr key={row.id}>
  //               {columns.map(column => {
  //                 if (column.format) {
  //                   return <td key={column.accessor}>{column.format(row[column.accessor])}</td>
  //                 }
  //                 return <td key={column.accessor}>{row[column.accessor]}</td>
  //               })}
  //             </tr>
  //           )
  //         })}
  //       </tbody>
  //     </table>
  //   )
  // }

  const Table = ({ columns, orders }) => {
    if (orders.searchStatus === true) {
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
        </table>
      )
    } else {
      return (
        <table>
          <thead>
            <tr>
              {columns.map(column => {
                return <th key={column.accessor}>{column.label}</th>
              })}
            </tr>
          </thead>
        </table>
      )
    }
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