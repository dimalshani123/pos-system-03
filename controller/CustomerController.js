// customerController.js

import { addCustomer, deleteCustomer, editCustomer, getCustomers } from './customerModel.js';
import { loadCustomerList, updateCounts } from './utils.js'; // Import utilities for UI updates

export function addCustomerHandler(event) {
    event.preventDefault();
    const customerId = document.getElementById('customerId').value;
    const customerName = document.getElementById('customerName').value;
    addCustomer(customerId, customerName);
    document.getElementById('customerForm').reset();
    loadCustomerList(getCustomers());
    updateCounts();
}

export function deleteCustomerHandler(customerId) {
    deleteCustomer(customerId);
    loadCustomerList(getCustomers());
    updateCounts();
}

export function editCustomerHandler(customerId) {
    const customer = getCustomers().find(c => c.id === customerId);
    if (customer) {
        document.getElementById('updateCustomerId').value = customer.id;
        document.getElementById('updateCustomerName').value = customer.name;
        document.getElementById('updateCustomerForm').classList.remove('hidden');
    }
}

export function updateCustomerHandler(event) {
    event.preventDefault();
    const customerId = document.getElementById('updateCustomerId').value;
    const customerName = document.getElementById('updateCustomerName').value;
    editCustomer(customerId, customerName);
    document.getElementById('updateCustomerForm').reset();
    document.getElementById('updateCustomerForm').classList.add('hidden');
    loadCustomerList(getCustomers());
    updateCounts();
}
