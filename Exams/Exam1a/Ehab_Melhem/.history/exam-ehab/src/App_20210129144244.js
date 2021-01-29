import "./App.css";
import { useState, useEffect } from "react";
import Card from "./Compents/Card";
import Cart from "./Compents/Cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [total, setTotall] = useState(0);
  const [present, setPresnts] = useState([]);
  const [cart, setCart] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    fetch("/make-id")
      .then((r) => r.json())
      .then((data) => {
        if (localStorage.getItem("id") === null) {
          localStorage.setItem("id", data.id);
          setId(localStorage.getItem("id"));
        }
      });
    fetch("/get-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: localStorage.getItem("id") }),
    })
      .then((r) => r.json())
      .then((data) => {
        setId(data.user.id);
        console.log(data);
        setTotall(data.user.totall);
        setPresnts(data.user.present);
      });
  }, []);
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <h4>total sum available {total}$</h4>
              {present.map((elm) => (
                <Card
                  total_forall={total}
                  buy={elm.buy}
                  card_id={elm.card_id}
                  setTotall={setTotall}
                  totall={elm.total}
                  item={elm.src}
                />
              ))}
              <Link to="/cart">
                <button className="btn">Go to Cart</button>
              </Link>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
