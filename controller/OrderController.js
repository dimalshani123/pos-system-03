// controller/OrderController.js

import Order from '../model/Order.js';
import { getItems } from './ItemController.js';

export const placeOrder = (customerId, itemId, availableQty, qty) => {
    const item = getItems().find(item => item.id === itemId);
    if (!item) {
        throw new Error('Item not found');
    }
    return Order.placeOrder(customerId, itemId, availableQty, qty, item.price);
};

export const getOrders = () => {
    return Order.getOrders();
};

export const deleteOrder = (orderId) => {
    Order.deleteOrder(orderId);
};
