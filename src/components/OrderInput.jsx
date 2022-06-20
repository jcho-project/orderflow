import { useState } from "react"

function OrderInput() {
    const [billTo, setBillTo] = useState("")
    const [shipTo, setShipTo] = useState("")

    const handleBillTo = (e) => {
        setBillTo(e.target.value)
    }

    const handleShipTo = (e) => {
        setShipTo(e.target.value)
    }

  return (
    <div className="input-container">
        <div className="input-group">
            <div className="customer">
                <h3>Customer</h3>
                <div className="sub-heading">Bill To</div>
                <form>
                    <select value={billTo} onChange={handleBillTo}>
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
                    <select value={shipTo} onChange={handleShipTo}>
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
                <input type="text" placeholder="input the customer purchase order" />
            </div>
            <div className="order-status">
                <h3>Order Status</h3>
                <div className="sub-heading">Status</div>
                <p>Booked</p>
            </div>
            <div className="order-number">
                <h3>Order No.</h3>
                <div className="sub-heading">Sales Order Number</div>
                <p>10023456</p>
            </div>
        </div>
    </div>
  )
}

export default OrderInput