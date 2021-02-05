const express = require('express');
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

let list = {
    cart: {
        productId: '',
        amuont: ''
    },
    product: [
        {
            productId: '1',
            price: '100'
        },
        {
            productId: '2',
            price: '50'
        },
    ],
    totalAmout:'150'
}

    app.get('/get-product', (req,res)=>{
        res.send(list.product);
    })

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})