// controller/ItemController.js

import Item from '../model/Item.js';

export const addItem = (name, price, qty) => {
    return Item.addItem(name, price, qty);
};

export const getItems = () => {
    return Item.getItems();
};

export const deleteItem = (itemId) => {
    Item.deleteItem(itemId);
};
