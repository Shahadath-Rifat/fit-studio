'use strict';

const form = document.getElementById('contact-form');
const fullnameInput = document.getElementById('fullname');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
event.preventDefault();
if (validateForm()) {
  form.submit();
 }
});

function validateForm() {

// Regular expression to validate email format
const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let valid = true;

// Check that required fields are not empty
if (fullnameInput.value.trim() === '') {
    alert('Please enter your full name');
    valid = false;
}

if (phoneInput.value.trim() === '') {
    alert('Please enter your phone number');
    valid = false;
}

if (emailInput.value.trim() === '') {
    alert('Please enter your email address');
    valid = false;
}

if (messageInput.value.trim() === '') {
    alert('Please enter a message');
    valid = false;
}

// Check that email is in valid format
if (!emailExp.test(emailInput.value.trim())) {
    alert('Please enter a valid email address');
    valid = false;
}

// Check that phone number is in valid format
if (!phoneInput.checkValidity()) {
    alert('Please enter a valid 10-digit phone number');
    valid = false;
}

return valid;
}