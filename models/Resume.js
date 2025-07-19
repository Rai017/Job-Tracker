const mongoose = require("mongoose");

const resumeSchema= mongoose.Schema({

  jobTitle: String,
  company: String,
  appliedDate: String,
  status: String,
  notes: String,
  file: String,
  user:{type :mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  },
    

});
module.exports=mongoose.model("Resume",resumeSchema);