const express = require('express');
const cors = require('./utils/cors');
const app = express();
const PORT = 4000 || process.env.PORT;
const db = require('./utils/db');
app.use(cors());
app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})
db()