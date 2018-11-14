# MyReads Project

This is my final submission for Udacity's React Fundamentals MyRead project.

The code does not include node modules. These can be included in the following way:

## Installation

* Clone or download the project files to your local machine. 
* Install the project dependencies with `npm install`
* start the development server with `npm start`

## Usage

* Home screen shows shelves for:
  * Currently Reading
  * Want to Read
  * Read
* Use the arrow-drop-down icon at the bottom-left corner of the book cover image to open a select menu 
* Use the select menu to move the book to another shelf or none.
* Use the add icon at the bottom-left corner of the screen to open the Search screen
* Use the arrow-back icon at the top-left of the Search screen to navigate back to the Home screen
* Use the Search bar to Search by title or author
* Search results can be added to shelves using the add icon and the select menu
* Navigate back to the Home screen to see the results on the selected shelf


## TL;DR

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   ├── index.html # DO NOT MODIFY
│   └── no-image.png # Replacement image when no thumbnail is available.
└── src
    ├── App.css # Styles for your app.
    ├── App.js # This is the root of the app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # For DOM rendering only.
```

## Backend Server

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.