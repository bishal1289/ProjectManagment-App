require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000","https://mern-pm-app.onrender.com"],
}));

const userRoutes = require("./routes/userRoute");
const {connect} = require("./db/db");

connect();

app.use("/",userRoutes);

const PORT = process.env.PORT || 4000


app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Server Started at ${PORT}`);
})
