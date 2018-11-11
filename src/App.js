import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

// Step 1 - Create components that hold data.
import SearchBooks from './Components/SearchBooks'

// Step 2 - Create components that need data.
import ListBooks from './Components/ListBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
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
        book.shelf = shelf
        this.setState((prevState) => ({
          book: prevState.books.filter(b => b.id !== book.id).concat([book])
        }))
        this.getBooks()
      })
  }


  render() {

    return (
      <div className="app">
        {this.state.showSearchPage ?
          <SearchBooks
            changeBookShelf={this.handleChangeBookShelf}
            toggleScreen={() => {
              this.setState(() => ({
                showSearchPage: false
              }))
            }}
          />
          :
          <ListBooks
            books={this.state.books}
            changeBookShelf={this.handleChangeBookShelf}
            toggleScreen={() => {
              this.setState(() => ({
                showSearchPage: true
              }))
            }}
          />
        }
      </div>
    )
  }
}

export default BooksApp