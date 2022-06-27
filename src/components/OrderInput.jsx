import { useContext, useState } from "react"
import OrderContext from "../context/OrderContext"
import { FaEdit } from "react-icons/fa"

function OrderInput() {
    const [searchValue, setSearchValue] =useState("")

    const { searchOrder, billTo, shipTo, customerPo, orderStatus } = useContext(OrderContext)

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(typeof(searchValue))
        searchOrder(searchValue)
    }

    const renderCustomerPo = (item) => {
        if (item === "") {
            return <p>No Customer PO</p>
        } else {
            return <p>{item}</p>
        }
    }

    const renderBillTo = (item) => {
        if (item === "") {
            return <p>No Bill To</p>
        } else {
            return <p>{item}</p>
        }
    }

  return (
    <div className="input-container">
        <div className="input-group">
            <div className="customer">
                <h3>Customer</h3>
                <div className="sub-heading">Bill To</div>
                {renderBillTo(billTo)}
                <form>
                    <select value={billTo} selected={billTo}>
                        <option value=""></option>
                        <option value="MSH">MSH</option>
                        <option value="Saturn">Saturn</option>
                        <option value="Otto">OTTO</option>
                    </select>
                </form>
            </div>
            <div className="delivery">
                <h3>Delivery</h3>
                <div className="sub-heading">Ship To</div>
                <form>
                    <select value={shipTo} selected={shipTo}>
                        <option value=""></option>
                        <option value="New York">New York</option>
                        <option value="Boston">Boston</option>
                        <option value="LA">LA</option>
                    </select>
                </form>
            </div>
            <div className="customerPO">
                <h3>Customer PO</h3>
                <div className="sub-heading">Purchase Order</div>
                {renderCustomerPo(customerPo)}
            </div>
            <div className="order-status">
                <h3>Order Status</h3>
                <div className="sub-heading">Status</div>
                <p>{orderStatus}</p>
            </div>
            <div className="order-number">
                <form onSubmit={handleSearch}>
                    <h3>Order No.</h3>
                    <div className="sub-heading">Sales Order Number</div>
                    <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
                    <button type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default OrderInput