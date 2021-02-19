
import { useState } from "react";
import Button from './Button';
import './BookSearch.css';

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
        setSelectedBooks(data.books);
      });

  }

  function deleteBook(e){
    // let key = Number(e.target.key);
    // console.log(key);
    // let tempBooks = [...selectedBooks];
    // setSelectedBooks(books);
  }

  return (
    <div className='body book-search'>
      <h4> Search Book By Name:</h4>
      <input name="search" className='template-input' placeholder="add book's name"></input>
      <Button onClick={getBook} innerText='Search' />
      <div className='display-books'>
      {selectedBooks.map((book, index) =>
        <div className="book-info-container" key={index}>
          <div className="book-info" >
            <p>Book Name: {book.name}</p>
            <p>Year of Publish: {book.year}</p>
            <p>Author: {book.author}</p>
          </div>
          <Button key={index} className='delete' innerText='Delete' onClick={(e) => deleteBook(e)}></Button>

        </div>
      )}
      </div>
    </div>
  );
}

export default BookSearch;