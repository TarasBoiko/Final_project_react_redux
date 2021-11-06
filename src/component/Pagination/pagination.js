import React, { Component } from 'react';

export class Pagination extends Component {
  onPrevPageHandler = (event) => {
    event.preventDefault();
    this.props.prevPage();
  };

  onNextPageHandler = (event) => {
    event.preventDefault();
    this.props.nextPage();
  };

  render() {
    const { onChange, currentPage, totalBooks, pageSize } = this.props;

    const paginationItemCount = Math.ceil(totalBooks / pageSize);
    const pageNumbers = [...new Array(paginationItemCount)].map(
      (_, index) => index + 1
    );

    const visibilityOffset = 5;
    const prevVisibilityOffset =
      currentPage < 5 ? 10 - (5 - currentPage + 5) : 5;

    const pagesSlice =
      currentPage + visibilityOffset < pageNumbers.length
        ? pageNumbers.slice(
            currentPage - prevVisibilityOffset,
            currentPage + visibilityOffset
          )
        : pageNumbers.slice(currentPage - visibilityOffset, pageNumbers.length);

    return (
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-center"
      >
        <ul className="pagination pagination-lg">
          <li className="page-item">
            <button
              className="page-link"
              href="#"
              onClick={() => onChange(currentPage - 1)}
              aria-label="Previous"
              page-item
              disabled={currentPage === 1}
            >
              <span aria-hidden="true">&laquo;</span>
              {/* <span className="sr-only">Previous</span> */}
            </button>
          </li>
          {pagesSlice.map((pageNumber) => (
            <li
              className={`page-item ${
                pageNumber === currentPage ? 'active' : ''
              }`}
            >
              <button
                className="page-link"
                onClick={() => onChange(pageNumber)}
                href="#"
              >
                {pageNumber}
              </button>
            </li>
          ))}
          <li clasNames="page-item">
            <button
              className="page-link"
              href="#"
              onClick={() => onChange(currentPage + 1)}
              aria-label="Next"
              disabled={currentPage === pageNumbers.length}
            >
              <span aria-hidden="true">&raquo;</span>
              {/* <span className="sr-only">Next</span> */}
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
