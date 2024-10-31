// controller/CustomerController.js

import Customer from '../model/Customer.js';

export const addCustomer = (name) => {
    return Customer.addCustomer(name);
};

export const getCustomers = () => {
    return Customer.getCustomers();
};

export const deleteCustomer = (customerId) => {
    Customer.deleteCustomer(customerId);
};
