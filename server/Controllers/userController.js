const { User } = require("../Database");

exports.registerController = async (req, res, next) => {
  const { email, fullName, password } = req.body;
  try {
    if (!email || !fullName || !password) {
      const err = new Error();
      err.name = "Bad Request";
      err.status = 400;
      err.message = "Please input all details";
      throw err;
    }
    const user = await User.findByEmail(email);
    if (user) {
      const err = new Error();
      err.name = "Bad Request";
      err.status = 400;
      err.message = "User with this email already exist";
      throw err;
    }
    const newUser = new User();
    newUser.email = email;
    newUser.fullName = fullName;
    newUser.password = User.hashPassword(password);
    await newUser.save();
    const userJson = newUser.authJSON();
    res.status(201).json({
      success: true,
      user: userJson,
    });
  } catch (error) {
    next(error);
  }
};

exports.loginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      const err = new Error();
      err.name = "Bad Request";
      err.status = 400;
      err.message = "Please input all details";
      throw err;
    }
    const user = await User.findByEmail(email);
    if (!user) {
      const err = new Error();
      err.name = "Authentication Error";
      err.status = 401;
      err.message = "This user doesn't exist";
      throw err;
    }
    const isMatch = user.compareHash(password);
    if (!isMatch) {
      const err = new Error();
      err.name = "Authentication Error";
      err.status = 401;
      err.message = "Passowrd Incorrect";
      throw err;
    }
    const userJson = user.authJSON();
    res.json({
      success: true,
      user: userJson,
    });
  } catch (error) {
    next(error);
  }
};
