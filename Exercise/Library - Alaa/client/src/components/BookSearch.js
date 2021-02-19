
import { useState } from "react";
import Button from './Button';

function BookSearch() {

  const [selectedBooks, setSelectedBooks] = useState([]);
  function getBook() {
    let searchInput = document.querySelector('[name="search"]');
    let bookName = !!searchInput && searchInput.value;
    searchInput.value = '';
    fetch('/get-books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify({ bookName })
    })
      .then(r => r.json())
      .then(data => {
        console.log(data.books)
        setSelectedBooks(data.books);
      });

  }


  return (
    <div className='body book-search'>
      <h4> Search Book By Name:</h4>
      <input name="search" className='template-input' placeholder="add book's name"></input>
      <Button onClick={getBook} innerText='Search' />
      {selectedBooks.map((book, index) =>
        <div key={index}>
          Book Name: {book.name}
          Year of Publish: {book.year}
          Author: {book.author} </div>)}
    </div>
  );
}

export default BookSearch;