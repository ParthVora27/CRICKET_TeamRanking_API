const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/cricket", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successfull");
}).catch((e) => {
    console.log("No connection successfull");
})
