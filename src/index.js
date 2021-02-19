import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Named Export
import {books} from './books';
// Default Export
import Book from './Book';

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // return <Book key={book.id} book={book}></Book>;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

ReactDom.render(<BookList/>, document.getElementById('root'));
