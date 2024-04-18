const User = require("../model/userModel");
const Project = require("../model/projectScema");
const bcrypt = require('bcrypt');

const loginController = async (req,res) => {
  const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        const comparePassword = bcrypt.compareSync(password, user.password);
        if (user && user.email === email && comparePassword === true) {
          res.json(user)
        }
      }
        else {
            res.json({ message: "User Invalid" })
        }
    } catch (error) {
        console.log(error)
    }
}

const registerController = async (req, res) => {
    const { email, name, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password,10)
  try {
    const user = await User.find({ email: email });
    if (user.length > 0) {
      res.json({ message: "User Exist" });
    } else {
      await User.create({ name: name, email: email, password: hashedPassword });
      res.json({ message: "User Created" })
    }
    } catch (error) {
        console.log(error)
    }
};

const projectController = async (req, res) => {
    const { name, description, deadline,email,technology } = req.body;
    try {
        const user_id = await User.findOne({ email: email });
        await Project.create({ name: name, description: description, deadline: deadline ,createdBy:user_id._id,tech:technology});
        res.json({ message: "Project Created" });
    } catch (err) {
        console.log(err)
    }
  
};

const getProjectController = async (req, res) => {
  console.log("vvv",req.body);
  const { email } = req.body;
    try {
        const user_id = await User.findOne({ email: email });
        const project = await Project.find({}).populate("createdBy");
        const userProject = project.filter((ele) => {
        if (ele.createdBy.id === user_id.id) {
          return true;
        }
      })
        res.json(userProject);
  } catch (err) {
        console.log(err);
  }
};

const deleteController = async (req, res) => {
  const { _id } = req.body;
  console.log(req.body.createdBy._id)
  try {
    const email_id = req.body.createdBy._id;
    await Project.findByIdAndDelete({ _id: _id });
    const project = await Project.find({}).populate("createdBy");
    const userProject = project.filter((ele) => {
      if (ele.createdBy.id === email_id) {
        return true;
      }
    });
      res.json(userProject);
  } catch (error) {
    console.log(error);
  }
};

const updateController = async (req, res) => {
  const { _id,description,technology,deadline,name } = req.body;
  console.log(req.body);
  try {
    const email_id = req.body.createdBy._id;
    const u = await Project.findByIdAndUpdate({ _id: _id } ,{name:name,description:description,tech:technology,deadline:deadline});
    const project = await Project.find({}).populate("createdBy");
    const userProject = project.filter((ele) => {
      if (ele.createdBy.id === email_id) {
        return true;
      }
    });
    console.log(u);
    res.json(userProject);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  loginController,
  registerController,
  projectController,
  getProjectController,
  deleteController,
  updateController,
};