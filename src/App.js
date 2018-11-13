import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

// Step 1 - Create components that hold data.
import SearchBooks from './Components/SearchBooks'

// Step 2 - Create components that need data.
import ListBooks from './Components/ListBooks'

// Step 6 - Add navigation.
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  // Created Lifecycle Event to load books from the API
  componentDidMount() {
    this.getBooks();
  }

  // Moved function from Lifecycle Event so it can be reused
  getBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  // Change shelf and remount the app
  handleChangeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.setState((prevState) => ({
          book: prevState.books.filter(b => b.id !== book.id).concat([book])
        }))
        this.getBooks()
      })
  }


  render() {

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            changeBookShelf={this.handleChangeBookShelf}
          />
        )} />
        <Route path="/search" render={() => (
          <SearchBooks
            changeBookShelf={this.handleChangeBookShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp