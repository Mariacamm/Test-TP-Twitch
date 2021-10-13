import React from "react";

function SearchBar({setKeyword}) {
    return (
      <div className="searchBar">
        <div class="ui icon input">
        <i class="search icon"></i>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>
    );
  }
  
  export default SearchBar;