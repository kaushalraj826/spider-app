const express = require('express');
const app = express();
app.use(express.json());

app.post('/save-score', (req, res) => {
    console.log("Score Saved:", req.body);
    res.status(200).send({success: true});
});

app.listen(3000, () => console.log('Server running on port 3000'));
