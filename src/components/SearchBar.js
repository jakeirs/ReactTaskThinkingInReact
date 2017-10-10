import React from 'react';

const SearchBar = (props) => {
    const {filterText, inStockOnly} = props;
    return (
        <form>
            <input type="text"
                   placeholder="Search..."
                   value={filterText} />
            <p>
                <input type="checkbox"
                       checked={inStockOnly} />
                {'  '}
                Only show products in stock
            </p>
        </form>
    );
}

export default SearchBar;