import React from "react";

export function LoginPage(
  registerOrLogin,
  handleSignUp,
  handleLogin,
  loginSuccess,
  FormsPageButton,
  alreadyRegisted
) {
  return (
    <div>
      {registerOrLogin === false ? (
        <div>
          <h1>SignUp</h1>
          <form onSubmit={handleSignUp}>
            <input type="text" placeholder="user name" name="name"></input>
            <input type="text" placeholder="password" name="password"></input>
            <input type="submit" placeholder="su"></input>
          </form>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="user name" name="name"></input>
            <input type="text" placeholder="password" name="password"></input>
            <input type="submit" placeholder="su"></input>

            <div>{loginSuccess ? <FormsPageButton /> : <div></div>}</div>
          </form>
        </div>
      )}
      {alreadyRegisted === false ? null : <h1>User already Registed</h1>}
    </div>
  );
}
