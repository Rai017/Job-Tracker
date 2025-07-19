const mongoose = require('mongoose');

const connectdb=async()=>{
try {
await mongoose.connect('mongodb://127.0.0.1:27017/jobtracker');
console.log("connect db");
}catch(error){
    console.log("not connect db",error.message);
}
};
module.exports=connectdb;