const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Cubing World v1 with database!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
