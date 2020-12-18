const Stripe = require('stripe');
const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
let fs = require("fs");
let accounts = fs.readFile('demofile1.html');
