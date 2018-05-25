import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
// import { bindActionCreators } from 'redux'

class Booklist extends Component {
  renderList = () => {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-grou col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, { selectBook })(Booklist)
