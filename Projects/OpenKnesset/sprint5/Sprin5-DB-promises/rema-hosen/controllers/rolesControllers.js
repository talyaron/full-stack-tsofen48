let admins = [{ userName: "rema", role: "admin" }];

exports.userType = (req, res, next) => {
  let userName = req.query.userName;
  let userIsAdmin = admins.find((user) => {
    return user.userName == userName;
  });
  let isAdmin = false;

  if (userIsAdmin) {
    isAdmin = true;
    res.cookie("role", userIsAdmin.role, {
      maxAge: 90000000000,
      httpOnly: true,
    });
    next();
  } else {
    res.cookie("role", "public", { maxAge: 90000000000, httpOnly: true });
    res.send({ isAdmin });
  }
};
