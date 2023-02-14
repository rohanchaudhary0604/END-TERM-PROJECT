const mongoose = require("mongoose");

mongoose.set("strictQuery" , true);

mongoose.connect('', { tls: true, ssl: true })
.then(() => {
    console.log("Connection Successful!");
}).catch((err) => {
    console.log(err);
}); 