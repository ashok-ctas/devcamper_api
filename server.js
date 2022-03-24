const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.dotenv' });

const app = express();

app.get('/api/v1/bootcamps',(req,res) => {
    res.status(200).json({success:true, msg:'show all bootcamps'});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port 
${PORT}`));