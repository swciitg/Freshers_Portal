import bcrypt from 'bcrypt';

const user = {
  username: 'admin',
  passwordHash: bcrypt.hashSync('password123', 10)
};

export const getLoginPage = (req, res) => {
  if(req.session.user) {
    return res.redirect('/upload');
  }
  res.render('login', { error: null });
};

export const login = (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && bcrypt.compareSync(password, user.passwordHash)) {
    req.session.user = username;
    res.redirect('/upload');
  } else {
    res.render('login', { error: 'Invalid credentials' });
  }
};

export const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/image/login');
  });
};

export const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/image/login');
  }
};
export default {
  getLoginPage,
  login,
  logout,
  isAuthenticated,
};
