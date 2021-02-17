import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { FormsPage2 } from "./View/FormsPage2";
import { LoginPage } from "./View/LoginPage";
import { FormsPageButton2 } from "./components/FormsPageButton2";

export default function App() {
  // register is false login is true
  const [registerOrLogin, setRegisterOrLogin] = useState(false);
  const [alreadyRegisted, setAlreadyRegisted] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useState("");

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
    return FormsPage2(submitForm, questions, submitQuestionsToServer);
  }

  function Login() {
    return LoginPage(
      registerOrLogin,
      handleSignUp,
      handleLogin,
      loginSuccess,
      FormsPageButton,
      alreadyRegisted
    );
  }

  
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/FormsPage">
            <FormsPage />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
