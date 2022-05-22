const express = require('express');
const { Mrouter } = require('./routers/movie');
const cors = require('./utils/cors');
const app = express();
const PORT = 4000 || process.env.PORT;
const db = require('./utils/db');
app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
});
app.use(cors());
app.use(express.json());
app.use("/movie",Mrouter);
db()