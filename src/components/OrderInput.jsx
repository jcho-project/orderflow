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
    <div className="input-group">
        <div className="customer">
            <h3>Customer</h3>
            <div className="sub-heading">Bill To</div>
            <form>
                <select value={billTo} onChange={handleBillTo}>
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
                    <option value="New York">New York</option>
                    <option value="Boston">Boston</option>
                    <option value="LA">LA</option>
                </select>
            </form>
        </div>
        <div className="customerPO">
            <h3>Customer PO</h3>
            <div className="sub-heading">Purchase Order</div>
        </div>
        <div className="order-status">
            <h3>Order Status</h3>
            <div className="sub-heading">Status</div>
        </div>
    </div>
  )
}

export default OrderInput