// util/validation.js

export const validateCustomerId = (id) => {
    return id && typeof id === 'string';
};

export const validateItemPrice = (price) => {
    return !isNaN(price) && price >= 0;
};

// Add more validation functions as needed
