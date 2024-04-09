const express = require('express')

const app = express();

app.get('/', (req, res) =>{
    res.send('workind')
})

app.listen(3000, () => {
    console.log('server is started');
})