// model/Customer.js

import db from '../db/database.js';

class Customer {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    static addCustomer(name) {
        const id = db.customers.length + 1; // Simple ID generation
        const newCustomer = new Customer(id, name);
        db.customers.push(newCustomer);
        return newCustomer;
    }

    static getCustomers() {
        return db.customers;
    }

    static deleteCustomer(customerId) {
        db.customers = db.customers.filter(customer => customer.id !== customerId);
    }
}

export default Customer;
