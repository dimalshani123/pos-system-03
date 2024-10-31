import { addCustomer, getCustomers, deleteCustomer } from './controller/CustomerController.js';

// Inside your existing addCustomer function
function addCustomer(event) {
    event.preventDefault();
    const customerName = document.getElementById('customerName').value;
    addCustomer(customerName);
    document.getElementById('customerForm').reset();
    loadCustomerList();
    updateCounts();
}

function loadCustomerList() {
    const customerList = document.getElementById('customerList');
    customerList.innerHTML = '';
    const customers = getCustomers();
    customers.forEach(customer => {
        const row = `<tr>
                        <td>${customer.id}</td>
                        <td>${customer.name}</td>
                        <td><button class="btn btn-danger" onclick="deleteCustomer('${customer.id}')">Delete</button>
                            <button class="btn btn-info" onclick="editCustomer('${customer.id}')">Edit</button>
                        </td>
                    </tr>`;
        customerList.innerHTML += row;
    });
}

// Update the deleteCustomer function to use the controller
function deleteCustomer(customerId) {
    deleteCustomer(customerId);
    loadCustomerList();
    updateCounts();
}
