import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import { debounce } from 'throttle-debounce';

// Step 1 - Create components that hold data.
// Added BooksGrid component to SearchBooks component,
// and debugged search functionality

// Step 6 - Add navigation.
import { NavLink } from 'react-router-dom'

import BooksGrid from './BooksGrid'

class SearchBooks extends Component {
  state = {
    query: '',
    booksFound: [],
  }

  // Created Lifecycle Event to Search for books in the API
  componentDidMount() {
    this.performSearch = debounce(250, this.performSearch);
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query,
    }))
    this.performSearch(query)
  }

  performSearch = (query) => {
    BooksAPI.search(query)
      .then(booksFound => {
        if (query) {
          this.setState({
            booksFound,
          })
        } else {
          this.setState({ booksFound: [] })
        }
      })
  }

  render() {

    return (
      <div className="search-books" >
        <div className="search-books-bar">
          <NavLink
            to="/"
            className="close-search"
          >Close
          </NavLink>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">

          {this.state.booksFound.length > 0 ?
            <BooksGrid
              books={this.state.booksFound}
              changeBookShelf={this.props.changeBookShelf}
            />
            :
            <h1>Please type in a title or author </h1>
          }
        </div>
      </div>
    )
  }
}

export default SearchBooks