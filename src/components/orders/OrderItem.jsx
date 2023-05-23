import OrderContext from "../../context/OrderContext"
import { useContext } from "react"
import { FaEdit, FaRegTimesCircle } from "react-icons/fa"

function OrderItem({items}) {
  const { editOrder, deleteOrder } = useContext(OrderContext)

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
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.id}>
          {columns.map(column => {
            return <td class="px-6 py-4" key={column.accessor}>{item[column.accessor]}</td>
          })}
          <td>
            <button>
              <FaEdit onClick={() => editOrder(item)} />
            </button>
          </td>
          <td>
            <button>
              <FaRegTimesCircle onClick={() => deleteOrder(item)} />
            </button>
          </td>
        </tr>
      )
    })
  )
}

export default OrderItem