// orderModel.js

let orders = [];

export function addOrder(customerId, itemId, orderAvailableQty, orderQty, total) {
    const orderId = orders.length + 1; // Simple ID generation
    orders.push({ id: orderId, customerId, itemId, availableQty: orderAvailableQty, qty: orderQty, total });
}

export function deleteOrder(orderId) {
    orders = orders.filter(order => order.id !== orderId);
}

export function getOrders() {
    return orders;
}
