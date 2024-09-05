
const mongoose = require("mongoose");
const DB = process.env.DATABASE;




//connecting to mongoose server
mongoose.connect(DB)
    .then(() => console.log("DATABASE CONNECTED"))
    .catch((err) => {
        console.log(err);
    });
