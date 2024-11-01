// itemController.js

import { addItem, deleteItem, editItem, getItems } from './itemModel.js';
import { loadItemList, updateCounts } from './utils.js'; // Import utilities for UI updates

export function addItemHandler(event) {
    event.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const itemQty = parseInt(document.getElementById('itemQty').value);
    addItem(itemName, itemPrice, itemQty);
    document.getElementById('itemForm').reset();
    loadItemList(getItems());
    updateCounts();
}

export function deleteItemHandler(itemId) {
    deleteItem(itemId);
    loadItemList(getItems());
    updateCounts();
}

export function editItemHandler(itemId) {
    const item = getItems().find(i => i.id === itemId);
    if (item) {
        document.getElementById('updateItemId').value = item.id;
        document.getElementById('updateItemName').value = item.name;
        document.getElementById('updateItemPrice').value = item.price;
        document.getElementById('updateItemQty').value = item.qty;
        document.getElementById('updateItemForm').classList.remove('hidden');
    }
}

export function updateItemHandler(event) {
    event.preventDefault();
    const itemId = parseInt(document.getElementById('updateItemId').value);
    const itemName = document.getElementById('updateItemName').value;
    const itemPrice = parseFloat(document.getElementById('updateItemPrice').value);
    const itemQty = parseInt(document.getElementById('updateItemQty').value);
    editItem(itemId, itemName, itemPrice, itemQty);
    document.getElementById('updateItemForm').reset();
    document.getElementById('updateItemForm').classList.add('hidden');
    loadItemList(getItems());
    updateCounts();
}
