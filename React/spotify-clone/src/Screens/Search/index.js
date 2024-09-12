import React from 'react'
import SearchCategory from '../../Pages/SearchCategory'
import SearchResults from '../../Pages/SearchResults'

function Search({ searchText, handleGetSongDetails }) {
    return (
        <div>
            {
                searchText !== '' && (
                    <SearchResults searchText={searchText} handleGetSongDetails={handleGetSongDetails} />
                )
            }
            <SearchCategory />
        </div>
    )
}

export default Search