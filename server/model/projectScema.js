const mongoose = require("mongoose");
const { Schema } = mongoose;
const projectSchema = new mongoose.Schema({
  name: String,
  description: {
    type: String,
  },
  deadline: {
    type: String,
  },
  createdBy: {
    type:Schema.Types.ObjectId,ref:"User"
  },
  tech:String
},{timestamps:true}); 

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
