import { FaEdit } from "react-icons/fa"

function OrderItem({items}) {
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
    items.map(item => {
      return (
        <>
          <tr key={item.id}>
            {columns.map(column => {
              return <td key={column.accessor}>{item[column.accessor]}</td>
            })}
          <button>
          <td><FaEdit /></td>
          </button>
          </tr>
        </>
      )
    })
  )
}

export default OrderItem