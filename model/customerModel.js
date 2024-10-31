// customerModel.js

let customers = [];

export function addCustomer(customerId, customerName) {
    customers.push({ id: customerId, name: customerName });
}

export function deleteCustomer(customerId) {
    customers = customers.filter(customer => customer.id !== customerId);
}

export function editCustomer(customerId, customerName) {
    const customerIndex = customers.findIndex(c => c.id === customerId);
    if (customerIndex > -1) {
        customers[customerIndex].name = customerName;
    }
}

export function getCustomers() {
    return customers;
}
