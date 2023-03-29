import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card.js';
import SearchIcon from '@mui/icons-material/Search';
// import { Home } from '../pages/Home.js';


// const Search = ({ item }) => {
//     const [searchInput, setSearchInput] = useState('');

//     const handleSearchInput = (e) => {
//         setSearchInput(e.target.value);
//     };

// //    const handleSearchBtn = () => {
// //     item(searchInput)
// //    }

//     const handleSearchBtn = item.filter((item) =>
//         item.neighbourhood.toLowerCase().includes(searchInput.toLowerCase())
//     );

//     return (
//         <div className='search'>
//             <input
//                 type='text'
//                 placeholder='Search by neighborhood'
//                 value={searchInput}
//                 onChange={handleSearchInput}
//             />
//             <button onClick={handleSearchBtn} type='submit'>
//                 Search
//             </button>
//         </div>
//     );
// };

// export default Search;

// const Search = ({ item }) => {
//     const [searchInput, setSearchInput] = useState('');

//     const handleSearchInput = (e) => {
//         setSearchInput(e.target.value);
//     };

//     const filteredListings = item?.filter((item) =>
//         item.neighbourhood.toLowerCase().includes(searchInput.toLowerCase())
//     );

//     return (
//         <div className='search'>
//             <input
//                 type='text'
//                 placeholder='Search by neighborhood'
//                 value={searchInput}
//                 onChange={handleSearchInput}
//             />
//             <div className='cardContainer'>
//                 {filteredListings?.map((item) => (
//                     <Card key={item._id} item={item} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Search;



// const SearchBar = ({ item, setSearchResults }) => {

//     const handleSubmit = (e) => e.preventDefault()

//     const handleSearchChange = (e) => {
//         if (!e.target.value) return setSearchResults(item)

//         const resArr = item.filter(data => data.neighbourhood.includes(e.target.value))
//         setSearchResults(resArr)
 
//     }

//   return (
//     <div>
//         <form className='search' onSubmit={handleSubmit}>

//         <input className='searchInput' 
//         type='text' 
//         id='search' 
//         onChange={handleSearchChange} />

//         <button className='searchBtn'>
//             <SearchIcon />
//         </button>

//         </form>
      
//     </div>
//   )
// }

// export default SearchBar
