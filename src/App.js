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
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {

    console.log(this.state.books)

    return (
      <div className="app">
        {this.state.showSearchPage ?
          <SearchBooks
            toggleScreen={() => {
              this.setState(() => ({
                showSearchPage: false
              }))
            }}
          />
          :
          <ListBooks
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
