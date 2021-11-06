import React, { Fragment } from 'react';
import { BookItem } from './BookItem';

// import { Link } from 'react-router-dom';

const BookFields = ({ data }) => {
  return (
    <div>
      <Fragment>
        {data.map((post) => (
          <BookItem book={post} />
        ))}
      </Fragment>
    </div>
  );
};

export default BookFields;
