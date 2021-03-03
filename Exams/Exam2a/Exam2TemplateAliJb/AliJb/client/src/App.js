import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import BookCard from "./components/BookCard/BookCard";

function App() {
  // Home Page Book map
  const [books, setBooks] = useState([]);
  // To show A message (Conditional Rendering)
  const [bookAdded, setbookAdded] = useState(false);
  // Find Page Book map
  const [foundBooks, setfoundBooks] = useState(books);
  // Re render BookMap ( used in useEffect)
  const [deleted, setdeleted] = useState(false);

  useEffect(() => {
    fetch("/book/get_books")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setBooks(data.books);
      });
  }, [deleted]);

  // Generate Random Id for Photos
  var ID = function () {
    return Math.random().toString(36).substr(2, 9);
  };

  async function submitBookToServer(e) {
    e.preventDefault();
    const name = e.target.children.name.value;
    const author = e.target.children.author.value;
    const year = e.target.children.year.value;
    const img = `https://picsum.photos/200?random=${ID()}`;
    const book = { name, author, year, img };

    axios
      .post("/book/add_book", {
        book,
      })
      .then(
        (response) => {
          console.log(response.data.book);
          console.log(books);
          setBooks([...books, response.data.book]);
          setbookAdded(true);
          // alert("Book was Added to Db");
        },
        (error) => {
          console.log(error);
          alert("Error :Something went wrong");
        }
      );
    e.target.children.name.value = "";
    e.target.children.author.value = "";
    e.target.children.year.value = "";
  }

  async function searchBookInDB(e) {
    e.preventDefault();

    const txt = e.target.children.search.value;

    axios
      .post("/book/find_books", {
        txt,
      })
      .then(
        (response) => {
          console.log(response.data.books);
          setfoundBooks(response.data.books);
        },
        (error) => {
          console.log(error);
          alert("Error :Something went wrong");
        }
      );

    e.target.children.search.value = "";
  }

  async function deleteBook(id) {
    console.log(id);
    const response = await fetch(`/book/delete_book/${id}`, {
      method: "DELETE",
    });
    console.log(response);
    // for UseEffect
    setdeleted(!deleted);
    return response.json();
  }

  function Home() {
    return (
      <div>
        <form onSubmit={submitBookToServer}>
          <input type="text" placeholder="Add Book Name" name="name"></input>
          <input
            type="text"
            placeholder="Add Book Author"
            name="author"
          ></input>
          <input type="text" placeholder="Add Book Year" name="year"></input>
          <input type="submit" placeholder="su"></input>
        </form>
        {bookAdded === true ? <div> Ok </div> : null}
        <div>
          {books.map((book, index) => {
            return (
              <div key={index}>
                <BookCard info={book} />
                <button
                  onClick={() => {
                    deleteBook(book._id);
                  }}
                >
                  Delete Me !{" "}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function Find() {
    return (
      <div>
        <form onSubmit={searchBookInDB}>
          <input
            type="text"
            placeholder="Search Book by Name Year Author"
            name="search"
          ></input>
          <input type="submit" placeholder="su"></input>
        </form>
        <div>
          {foundBooks.map((book, index) => {
            return (
              <div key={index}>
                <BookCard info={book} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/find">Find</Link>
              </li>
              {/* <li>
                <Link to="/users">Users</Link>
              </li> */}
            </ul>
          </nav>

          <div>
            <Link to="/find">
              <button type="button">Find Screen</button>
            </Link>
            <Link to="/">
              <button type="button">Home Screen</button>
            </Link>
          </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/find">
              <Find />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
