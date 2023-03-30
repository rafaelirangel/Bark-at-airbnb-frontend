import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card.js';
import SearchIcon from '@mui/icons-material/Search';
import { useParams, useLocation } from 'react-router-dom';


// const SearchBar = ({ setSearchResults, item }) => {
  

//     const handleSubmit = (e) => {
//         e.preventDefault()
//     }

//     const handleSearchChange = (e) => {
//         // const [searchResults, setSearchResults] = useState(listingsData);

//         if (!e.target.value){
//             return setSearchResults(item);
//         }

//         const resultsArray = item.filter(data => data.street.includes(e.target.value))
//         console.log(resultsArray)

//         setSearchResults(resultsArray);
//     }

//     return (
//         <div>
//             <form className='search' onSubmit={handleSubmit}>

//                 <input className='searchInput'
//                 type='text'
//                 id='search'
//                 onChange={handleSearchChange}
//                 />

//                 <button className='searchBtn'>
//                     <SearchIcon />
//                 </button>
//             </form>
           
//         </div>
//     );
// }

// export default SearchBar



const SearchBar = ({item}) => {
    const [searchInput, setSearchInput] = useState('');

    console.log(item)
    // const { id } = useParams();
    // console.log(id)
    // const location = useLocation()
    // console.log(location)
    // const { item } = location.state

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = item?.filter((items) =>
        items.street.toLowerCase().includes(searchInput.toLowerCase())
    );


    const handleSearchBtn = () => {
        handleSearch(searchInput)
    }

    
    return (
        <div className='search'>
            <input
                className=''
                type='text'
                placeholder='Search by neighborhood'
                value={searchInput}
                onChange={handleSearchInput}
            />
            <button className='searchBtn' type='submit' onClick={handleSearchBtn}>
                <SearchIcon className='searchIcon' />
            </button>
        </div>
    );
};

export default SearchBar;
