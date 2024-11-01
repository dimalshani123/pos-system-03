// utils.js

import { getCustomers } from './customerModel.js';
import { getItems } from './itemModel.js';
import { getOrders } from './orderModel.js';

export function loadCustomerList(customers) {
    const customerList = document.getElementById('customerList');
    customerList.innerHTML = '';
    customers.forEach(customer => {
        const row = `<tr>
                        <td>${customer.id}</td>
                        <td>${customer.name}</td>
                        <td><button class="btn btn-danger" onclick="deleteCustomerHandler('${customer.id}')">Delete</button>
                            <button class="btn btn-info" onclick="editCustomerHandler('${customer.id}')">Edit</button>
                        </td>
                    </tr>`;
        customerList.innerHTML += row;
    });
}

export function loadItemList(items) {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    items.forEach(item => {
        const row = `<tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>${item.qty}</td>
                        <td><button class="btn btn-danger" onclick="deleteItemHandler(${item.id})">Delete</button>
                            <button class="btn btn-info" onclick="editItemHandler(${item.id})">Edit</button>
                        </td>
                    </tr>`;
        itemList.innerHTML += row;
    });
}

export function loadOrderList(orders) {
    const orderList = document.getElementById('orderList');
    orderList.innerHTML = '';
    orders.forEach(order => {
        const row = `<tr>
                        <td>${order.id}</td>
                        <td>${order.customerId}</td>
                        <td>${order.itemId}</td>
                        <td>${order.qty}</td>
                        <td>${order.total.toFixed(2)}</td>
                        <td><button class="btn btn-danger" onclick="deleteOrderHandler(${order.id})">Delete</button>
                    </tr>`;
        orderList.innerHTML += row;
    });
}

export function updateCounts() {
    const totalCustomers = getCustomers().length;
    const totalItems = getItems().length;
    const totalOrders = getOrders().length;

    document.getElementById('totalCustomers').innerText = totalCustomers;
    document.getElementById('totalItems').innerText = totalItems;
    document.getElementById('totalOrders').innerText = totalOrders;
}
