import React from 'react'
import ListBooksTitle from './ListBooksTitle'
import OpenSearch from './OpenSearch'
import BooksGrid from './BooksGrid'

// Step 2 - Create components that need data.
// Step 3 - Pass data from components that have it to components that need it.
// Extracted list-book-title div into a stateless functional component.
// Extracted open-search div into a stateless functional component.
// Extracted book-grid div into a stateless functional component,
// and passed the necessary props to create a BookGrid of books

const ListBooks = (props) => {

  console.log(props.books)

  return (
    < div className="list-books" >
      <ListBooksTitle />
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <BooksGrid
                books={props.books.filter(book => book.shelf === "currentlyReading")}
              />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <BooksGrid
                books={props.books.filter(book => book.shelf === "wantToRead")}
              />
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <BooksGrid
                books={props.books.filter(book => book.shelf === "read")}
              />
            </div>
          </div>
        </div>
      </div>
      <OpenSearch
        toggleScreen={props.toggleScreen}
      />
    </div >
  )

}

export default ListBooks