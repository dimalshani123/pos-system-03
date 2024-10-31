import CustomerModel from "../model/customerModel.js";
import { customer_arr } from "../db/database.js";
import { loadCustomers } from "./OrderController.js";

const validEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

const validMobile = (mobile) => {
    const sriLankanMobileRegex = /^(?:\+94|0)?7[0-9]{8}$/;
    return sriLankanMobileRegex.test(mobile);
}

let setCustomerId = () => {
    $("#customer_id").val(""); // Clear the customer ID input for manual entry
}

const loadCustomerTable = () => {
    $("#customerTableBody").empty();
    customer_arr.map((item, index) => {
        let data = `<tr><td>${item.customer_id}</td><td>${item.name}</td><td>${item.address}</td><td>${item.email}</td><td>${item.mobile}</td></tr>`;
        $('#customerTableBody').append(data);
    });
}

const cleanCustomerForm = () => {
    $('#customer_id').val("");
    $('#customer_name').val("");
    $('#email').val("");
    $('#contact').val("");
    $('#address').val("");
}

$("#cusbtn").on("click", function () {
    let customer_id = $('#customer_id').val(); // Get customer ID from input
    let name = $('#customer_name').val();
    let address = $('#address').val();
    let email = $('#email').val();
    let contact = $('#contact').val();

    if (customer_id.length === 0) {
        Swal.fire("Invalid customer ID!");
    } else if (name.length === 0) {
        Swal.fire("Invalid customer name!");
    } else if (address.length === 0) {
        Swal.fire("Invalid customer address!");
    } else if (!validEmail(email)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Email",
        });
    } else if (!validMobile(contact)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Input",
            text: "Invalid Contact Number",
        });
    } else {
        let customer = new CustomerModel(
            customer_id,
            name,
            address,
            email,
            contact
        );

        if (customer_arr.push(customer)) {
            const Toast = Swal.mixin({
                toast: true,
                position: "center",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Customer saved successfully"
            });
            loadCustomerTable();
            loadCustomers();
            cleanCustomerForm();
            setCustomerId();
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Customer not saved!!",
            });
        }
    }
});

let customer_update_index;
let customer_delete_index;

$("#customerTableBody").on("click", 'tr', function () {
    let index = $(this).index();
    let customer_obj = customer_arr[index];

    // Update customer
    customer_update_index = index;

    // Delete customer
    customer_delete_index = index;
    let customerId = customer_obj.customer_id;
    let customerName = customer_obj.name;
    let address = customer_obj.address;
    let email = customer_obj.email;
    let mobile = customer_obj.mobile;

    $('#customer_id').val(customerId);
    $('#customer_name').val(customerName);
    $('#address').val(address);
    $('#email').val(email);
    $('#contact').val(mobile);
});

$("#cus_update_btn").on("click", function () {
    let index = customer_update_index;

    let customer_id = $('#customer_id').val();
    let name = $('#customer_name').val();
    let address = $('#address').val();
    let email = $('#email').val();
    let mobile = $('#contact').val();

    let customer = new CustomerModel(
        customer_id,
        name,
        address,
        email,
        mobile
    );
    customer_arr[index] = customer;
    loadCustomerTable();
    cleanCustomerForm();
    setCustomerId();
});

$("#cus_delete_btn").on("click", function () {
    let index = customer_delete_index;

    customer_arr.splice(index, 1);

    cleanCustomerForm();
    loadCustomerTable();
    setCustomerId();
});

$("#cus_clean_btn").on("click", function () {
    cleanCustomerForm();
});
