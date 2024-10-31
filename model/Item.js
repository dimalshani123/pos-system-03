// model/Item.js

import db from '../db/database.js';

class Item {
    constructor(id, name, price, qty) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }

    static addItem(name, price, qty) {
        const id = db.items.length + 1; // Simple ID generation
        const newItem = new Item(id, name, price, qty);
        db.items.push(newItem);
        return newItem;
    }

    static getItems() {
        return db.items;
    }

    static deleteItem(itemId) {
        db.items = db.items.filter(item => item.id !== itemId);
    }
}

export default Item;

