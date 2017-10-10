import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {
    constructor (props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }

    render() {
        const {products} = this.props;
        const {filterText, inStockOnly} = this.state;
        return (
            <div>
                <SearchBar
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                />
                <ProductTable
                    products={products}
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                />
            </div>
        );
    }
}

export default FilterableProductTable;