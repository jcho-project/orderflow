import Button from "./shared/Button"

function OrderForm() {

  const rows = [
    { id: 1, model: 'Liz Lemon', quantity: 36, price: 10.50, line_status: 'Booked' },
    { id: 2, model: 'Jack Donaghy', quantity: 40, price: true, line_status: 'Awaiting Shippint' },
    { id: 3, model: 'Tracy Morgan', quantity: 39, price: false, line_status: 'Pending Pre-Billing' },
    { id: 4, model: 'Jenna Maroney', quantity: 40, price: false, line_status: 'Closed' },
    { id: 5, model: 'Kenneth Parcell', quantity: Infinity, price: false, line_status: 'Awaiting Shipping' },
    { id: 6, model: 'Pete Hornberger', quantity: null, price: true, line_status: 'Booked' },
    { id: 7, model: 'Frank Rossitano', quantity: 36, price: false, line_status: "Entered" },
    { id: 8, model: null, quantity: 80, price: 80.50, line_status: "Booked" },
  ]

  const columns = [
    { accessor: 'model', label: 'Model' },
    { accessor: 'quantity', label: 'Quantity' },
    { accessor: 'price', label: 'Price', format: value => (value ? '✔️' : '✖️') },
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