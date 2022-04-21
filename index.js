const express = require('express');
var cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my over Smarty Pant!!')
})

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788' },
    { id: 2, name: 'Saabnoor', email: 'Saabnoor@gmail.com', phone: '01788' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788' },
    { id: 4, name: 'Suchonda', email: 'Suchonda@gmail.com', phone: '01788' },
    { id: 5, name: 'sraboni', email: 'sraboni@gmail.com', phone: '01788' },
    { id: 6, name: 'Srabonti', email: 'Srabonti@gmail.com', phone: '01788' },
    { id: 7, name: 'Sabila', email: 'Sabila@gmail.com', phone: '017888' }
]

app.get('/users', (req, res) => {
    // filter by query param    
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched)
    }
    else
        res.send(users)
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)
    res.send(user);
});


app.post('/user', (req, res) => {
    console.log('request', req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})

app.get('fruits', (req, res) => {
    res.send(['mango', 'apple', 'orangee'])
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sour fazle flavor')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})