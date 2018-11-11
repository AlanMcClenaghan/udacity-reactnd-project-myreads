import React from 'react'

const BooksGrid = (props) => {

  const books = props.books
  const changeBookShelf = props.changeBookShelf

  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                }}></div>
              <div className="book-shelf-changer">
                <select
                  value={book.shelf ? book.shelf : book.shelf = 'move'}
                  onChange={event => changeBookShelf(book, event.target.value)}
                >
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{books.title}</div>
            <div className="book-authors">{book.authors.join(', ')}</div>
          </div>
        </li>
      ))}
    </ol>
  )

}

export default BooksGrid