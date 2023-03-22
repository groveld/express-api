// src/controllers/authController.js
exports.authenticate = (req, res) => {
  const { username, password } = req.body;

  if (username === 'username' && password === 'password') {
    res.status(200).json({ token: 'eadfiuyasdifuyhliudsf' });
  } else {
    res.status(401).json({});
  }
};
