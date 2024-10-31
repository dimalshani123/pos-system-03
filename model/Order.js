// model/Order.js

import db from '../db/database.js';

class Order {
    constructor(id, customerId, itemId, availableQty, qty, total) {
        this.id = id;
        this.customerId = customerId;
        this.itemId = itemId;
        this.availableQty = availableQty;
        this.qty = qty;
        this.total = total;
    }

    static placeOrder(customerId, itemId, availableQty, qty, itemPrice) {
        if (qty > availableQty) {
            throw new Error('Insufficient quantity available!');
        }
        const id = db.orders.length + 1; // Simple ID generation
        const total = itemPrice * qty;
        const newOrder = new Order(id, customerId, itemId, availableQty, qty, total);
        db.orders.push(newOrder);
        return newOrder;
    }

    static getOrders() {
        return db.orders;
    }

    static deleteOrder(orderId) {
        db.orders = db.orders.filter(order => order.id !== orderId);
    }
}

export default Order;
