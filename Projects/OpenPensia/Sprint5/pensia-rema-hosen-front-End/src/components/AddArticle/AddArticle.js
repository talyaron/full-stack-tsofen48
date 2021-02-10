import React from "react";
import "./AddArticle.css";
export default function AddArticle() {
  return (
    <div className="addArticle">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log();
          let { source, subTitle, linkToArticle } = e.target.children;
          console.log("dsfds", e.target.children);
          source = source.value;
          subTitle = subTitle.value;
          linkToArticle = linkToArticle.value;

          console.log(source);

          fetch(
            "https://pensia-rema-hosen-backend.herokuapp.com/article" ||
              "http://localhost:3000/article",
            {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ source, subTitle, linkToArticle }), // body data type must match "Content-Type" header
            }
          );
        }}
      >
        <label htmlFor="source">מקור הכתבה :</label>
        <input
          name="source"
          placeholder=" כתבה בynet "
          required
          onInvalid={(e) => {
            e.target.setCustomValidity(" *  נא להכניס את המקור של הכתובת ");
          }}
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
        />

        <label htmlFor="subTitle">הכתבה בכמה מילים :</label>
        <input
          name="subTitle"
          placeholder=" כתבה על שיפור מכירות ובמחסני חשמל "
          onInvalid={(e) => {
            e.target.setCustomValidity(" *  נא לסכם את הכתבה בכמה מילים  ");
          }}
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
          required
        />

        <label htmlFor="linkToArticle">קישור לכתבה :</label>
        <input
          name="linkToArticle"
          placeholder=" למשל : www.example.com "
          onInvalid={(e) => {
            e.target.setCustomValidity(" *  נא לצרף קישור לכתבה      ");
          }}
          onInput={(e) => {
            e.target.setCustomValidity("");
          }}
          required
        />

        <button type="submit">שלח</button>
      </form>
    </div>
  );
}
