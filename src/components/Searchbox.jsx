import React, { useState } from 'react';

function SearchBox({ fetchData }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='form-control'
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Enter your search query"
      />
      <button className = 'btn btn-success'type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
