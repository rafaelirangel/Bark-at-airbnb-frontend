import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';

function SearchBar({ listingsData, setSearchResult }) {
    const [originalListingsData, setOriginalListingsData] = useState([]);

    useEffect(() => {
        setOriginalListingsData(listingsData);
    }, [listingsData]);

    const handleSubmit = (e) => {e.preventDefault()}

       const handleSearchChange = (e) => {
        if (!e.target.value) {
            setSearchResult(originalListingsData);
        } else {
            const resArr = originalListingsData.filter(
                (data) =>
                    data.street
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
            );
            setSearchResult(resArr);
        }
    };

  return (
    <div>
        
          <form className='search' onSubmit={handleSubmit}>

                 <input className='searchInput'
                 type='text'
                 id='search'
                 onChange={handleSearchChange}
                 placeholder='Search by borough'
                 />

                 <button className='searchBtn' >
                     <SearchIcon className='searchIcon' />
                 </button>
             </form>
    </div>
  )
}

export default SearchBar
