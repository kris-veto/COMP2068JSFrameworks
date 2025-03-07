//Importing required modules
const connect = require('connect');
const url = require('url');
const http = require('http');

// Function to parse URL and calculate
function calculate(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const { method, x, y } = parsedUrl.query;
    
    // Convert x and y to numbers
    const num1 = parseFloat(x);
    const num2 = parseFloat(y);

    // Check if x and y are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        res.end('Error: Invalid numbers. Please provide valid numeric values for x and y.');
        return;
    }

    let result;
    let operator;

    if (method === 'add') {
        result = num1 + num2;
        operator = '+';
    } else if (method === 'subtract') {
        result = num1 - num2;
        operator = '-';
    } else if (method === 'multiply') {
        result = num1 * num2;
        operator = '*';
    } else if (method === 'divide') {
        if (num2 === 0) {
            res.end('Error: Division by zero is undefined.');
            return;
        }
        result = num1 / num2;
        operator = '/';
    } else {
        res.end('Invalid method. Please use add, subtract, multiply, or divide.');
        return;
    }

    res.end(`${num1} ${operator} ${num2} = ${result}`);
}

// Create the Connect app and use middleware
const app = connect();
app.use('/lab2', calculate);

// Create and start the server
http.createServer(app).listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

