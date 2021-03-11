import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
//components
import Screen from "./components/screen.js";
import axios from "axios";
import QuestionForm from "./components/QuestionForm";
import { FormsPageButton2 } from "./components/FormsPageButton2";

function App() {
  const [companies, setCompanies] = useState([]);

  // register is false login is true
  const [registerOrLogin, setRegisterOrLogin] = useState(false);
  const [alreadyRegisted, setAlreadyRegisted] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("/get-companies")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setCompanies(data.companies);
      });
  }, []);

  function loginFunc() {
    fetch("/login/login")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
    return <div>Ok Login Success</div>;
  }

  function handleSignUp(e) {
    e.preventDefault();

    const username = e.target.children.name.value;
    const password = e.target.children.password.value;

    axios
      .post("/register-user", {
        username,
        password,
      })
      .then(
        (response) => {
          console.log(response);
          setAlreadyRegisted(!response.data.ok);

          if (response.data.ok) {
            setRegisterOrLogin(true);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function handleLogin(e) {
    e.preventDefault();
    const username = e.target.children.name.value;
    const password = e.target.children.password.value;

    axios
      .post("/login-user", {
        username,
        password,
      })
      .then(
        (response) => {
          console.log(response.data.ok);

          if (response.data.ok) {
            setLoginSuccess(true);
            setUser(username);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function FormsPageButton() {
    let history = useHistory();
    function handleClick() {
      history.push("/FormsPage");
    }

    return FormsPageButton2(handleClick);
  }

  function submitForm(e) {
    e.preventDefault();
    const question = e.target.children.question.value;

    setQuestions([...questions, question]);
    console.log(questions);
  }

  function submitQuestionsToServer() {
    axios
      .post("/submit-questions", {
        questions,
        user,
      })
      .then(
        (response) => {
          console.log(response);

          if (response.data.ok) {
            console.log("Ok");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function FormsPage() {
    return (
      <div>
        <form onSubmit={submitForm}>
          <input type="text" placeholder="Add question" name="question"></input>
          <input type="submit" placeholder="su"></input>
        </form>

        <div>
          {questions.map((question, index) => {
            return (
              <div key={index}>
                <p key={index}>{question.id}</p>

                <QuestionForm info={question} />
              </div>
            );
          })}
        </div>

        <button onClick={submitQuestionsToServer}>Submit Questions</button>
      </div>
    );
  }

  function Login() {
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

  // function HomeButton() {
  //   let history = useHistory();

  //   function handleClick() {
  //     history.push("/About");
  //   }

  //   return (
  //     <button type="button" onClick={handleClick}>
  //       Go home
  //     </button>
  //   );
  // }

  function Home() {
    return (
      <div>
        {loginFunc()}

        <div>
          {companies.map((list, index) => {
            return (
              <Screen
                key={index}
                logo={list.logo}
                name={list.name}
                par={list.par}
              />
            );
          })}
        </div>
      </div>
    );
  }
  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }

  return (
    <div>
      <Router>
        <div>
          <div>
            <Link to="/about">
              <button type="button">About Screen</button>
            </Link>
            <Link to="/users">
              <button type="button">users Screen</button>
            </Link>
            <Link to="/">
              <button type="button">Home Screen</button>
            </Link>
          </div>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/FormsPage">
              <FormsPage />
            </Route>
            <Route path="/">
              <Home />
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
