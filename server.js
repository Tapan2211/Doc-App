const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors')

//Router 
const user = require('./routes/user.route');
const adminRoute = require('./routes/admin.route')

//.env config
dotenv.config();

//MongoDB connection
connectDB();

// rest object
const app = express()

//meddleware
app.use(express.json());
app.use(morgan('dev'));

// Enable CORS
app.use(cors());
// app.use(cors({ origin: 'http://localhost:3000' }));

//routes
app.use('/api/v1/user', user);
app.use('/api/v1/admin', adminRoute)

// app.get('/', (req, res) => {
//     res.status(200).send({
//         message: "Server Running",
//     });
// });

//listen port 
const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Server is Running on ${process.env.NODE_MODE} Mode on port :${process.env.PORT}`.bgCyan.white);
})