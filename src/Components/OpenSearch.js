import React from 'react'

// Step 6 - Add navigation.
import { NavLink } from 'react-router-dom'

const OpenSearch = (props) => (
  <div className="open-search">
    <NavLink to="/search">Add a book</NavLink>
  </div >
)

export default OpenSearch