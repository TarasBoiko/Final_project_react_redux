import React from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import { Container } from 'reactstrap';

// import Loading from '../../component/Loading/Loading';
import Pagination from '../../component/Pagination/pagination';

import BookFields from './components/BookFields';

import {
  fetchBooks,
  actions,
} from '../../pages/Books/reducers/bookList.reducer';
import {
  bookListSelector,
  loadingSelector,
  currentPageSelector,
  postPerPageSelector,
  errorSelector,
} from './selectors/books.selector.js';
import { ContentBox } from '../../globalStyles';

class Books extends React.Component {
  componentDidMount() {
    const { fetchBooksBegin } = this.props;
    fetchBooksBegin();
  }

  changePage = (pageNumber) => {
    this.props.changeCurrentPage(pageNumber);
  };

  render() {
    const { loading, booksList, currentPage, postPerPage } = this.props;

    const indexOfLastPost = currentPage * postPerPage;
    const indexOffirstPage = indexOfLastPost - postPerPage;
    const currentData = booksList.slice(indexOffirstPage, indexOfLastPost);

    return (
      <Fragment>
        <ContentBox>
          <Container>
            {/* {loading && <Loading />} */}
            {!loading && (
              <div>
                <div>
                  <BookFields data={currentData} />
                  <Pagination
                    onChange={this.changePage}
                    currentPage={currentPage}
                    totalBooks={booksList.length}
                    pageSize={postPerPage}
                  />
                </div>
              </div>
            )}
          </Container>
        </ContentBox>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  booksList: bookListSelector(state),
  loading: loadingSelector(state),
  currentPage: currentPageSelector(state),
  postPerPage: postPerPageSelector(state),
  changeCurrentPage: errorSelector(state),
});

const mapDispatchToProps = {
  fetchBooksBegin: fetchBooks,
  changeCurrentPage: actions.changeCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
