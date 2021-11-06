import React, { Component } from 'react';

// import Loading from '../../../../Components/Loading/loading';
// import '../../../../Components/Navbar/navbar.css';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { ContentBox } from '../../../../globalStyles';
import { fetchBook } from '../../reducers/bookItem.reducer';

class BooksDetail extends Component {
  componentDidMount() {
    const {
      fetchBookThunk,
      match: { params },
    } = this.props;

    fetchBookThunk(params.id);
  }

  render() {
    const {
      bookItemState: { data, loading },
    } = this.props;

    return (
      <ContentBox>
        <Container>
          <div className="">
            {/* {!loading && ( */}
            <div className="">
              <div className="text-center">
                <h5 className="card-header">{data.title}</h5>
                <p className="card-subtitle mb-2 text-muted">
                  {data.description}
                </p>
                <p className="card-text">{data.excerpt}</p>
                <small>{data.publishDate}</small>
              </div>
            </div>

            {/* )} */}
            {/* {loading && <Loading />} */}
          </div>
        </Container>
      </ContentBox>
    );
  }
}

const mapStateToProps = (state) => ({
  bookItemState: state.booksReducer.bookItemReducer,
});

const mapDispatchToProps = { fetchBookThunk: fetchBook };

export default connect(mapStateToProps, mapDispatchToProps)(BooksDetail);
