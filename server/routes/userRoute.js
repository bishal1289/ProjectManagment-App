const router = require('express').Router();

const {
  loginController,
  registerController,
  projectController,
  getProjectController,
  deleteController,
  updateController,
} = require("../controller/userController");

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/add-project", projectController);
router.post("/project", getProjectController);
router.post("/delete", deleteController);
router.post("/update", updateController);


module.exports = router;