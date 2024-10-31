// itemModel.js

let items = [];
let itemPrices = {};

export function addItem(itemName, itemPrice, itemQty) {
    const itemId = items.length + 1; // Simple ID generation
    items.push({ id: itemId, name: itemName, price: itemPrice, qty: itemQty });
    itemPrices[itemId] = itemPrice; // Store item price for calculations
}

export function deleteItem(itemId) {
    items = items.filter(item => item.id !== itemId);
    delete itemPrices[itemId]; // Remove item price
}

export function editItem(itemId, itemName, itemPrice, itemQty) {
    const itemIndex = items.findIndex(i => i.id === itemId);
    if (itemIndex > -1) {
        items[itemIndex] = { id: itemId, name: itemName, price: itemPrice, qty: itemQty };
        itemPrices[itemId] = itemPrice; // Update item price
    }
}

export function getItems() {
    return items;
}
