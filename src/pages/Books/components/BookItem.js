import React from 'react';
import { Link } from 'react-router-dom';

export const BookItem = ({ book }) => {
  return (
    <div class="card-body">
      <div key={book.id} className="alert alert-primary">
        <h3 className="alert-heading">{book.title}</h3>
        <p>{book.description}</p>
        <Link to={`/books/${book.id}`}>View detail</Link>
      </div>
    </div>
  );
};
