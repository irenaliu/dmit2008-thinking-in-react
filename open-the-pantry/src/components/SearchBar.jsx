import React, { useState, useContext } from 'react';
import { MDBIcon } from 'mdbreact';

import { AppContext } from '../store/AppStore.js';

const SearchBar = () => {
  // app store
  const store = useContext(AppContext);

  const [searchString, setSearchString] = useState('');
  const [filteredRecipes, setFilteredRecipes] = store.desiredRecipes;

  return (
    <div className='d-flex'>
      <input
        className='form-control mr-sm-2'
        type='text'
        placeholder='Search recipes for..'
        aria-label='Search recipes for..'
        value={searchString}
        onChange={(event) => setSearchString(event.target.value)}
      />

      <MDBIcon className='mr-auto grey-text align-self-center' icon='search' />
    </div>
  );
};

export default SearchBar;
