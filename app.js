const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public/css'));
app.use(express.static('public/images'));
app.use(express.static('public/js'));
app.get('/', (req, res) => {
    res.sendFile('/views/index.html', { root: __dirname});
});
app.get('/about.html', (req, res) => {
    res.sendFile('/views/about.html', { root: __dirname});
});

app.listen(PORT, () => console.log(`Server connected to: ${PORT}`));
