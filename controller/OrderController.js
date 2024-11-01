// orderController.js

import { addOrder, deleteOrder, getOrders } from './orderModel.js';
import { loadOrderList, updateCounts } from './utils.js'; // Import utilities for UI updates

export function placeOrderHandler(event) {
    event.preventDefault();
    const orderCustomerId = document.getElementById('orderCustomerId').value;
    const orderItemId = parseInt(document.getElementById('orderItemId').value);
    const orderAvailableQty = parseInt(document.getElementById('orderAvailableQty').value);
    const orderQty = parseInt(document.getElementById('orderQty').value);

    if (orderQty > orderAvailableQty) {
        alert('Insufficient quantity available!');
        return;
    }

    const total = itemPrices[orderItemId] * orderQty;
    addOrder(orderCustomerId, orderItemId, orderAvailableQty, orderQty, total);
    document.getElementById('orderForm').reset();
    loadOrderList(getOrders());
    updateCounts();
}

export function deleteOrderHandler(orderId) {
    deleteOrder(orderId);
    loadOrderList(getOrders());
    updateCounts();
}
