
import './Signin.css';

function App() {
  return (
    <div>
        <form>
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required/>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        </form>
    </div>
  );
}

export default App;