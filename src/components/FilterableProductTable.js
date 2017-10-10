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

    handleFilterTextChange = (event) => {
        const filterText = event.target.value;
        this.setState({
            filterText: filterText
        });
    }

    handlerInStockChange = (event) => {
        const inStockOnly = event.target.checked;
        this.setState({
            inStockOnly: inStockOnly
        });
    }

    render() {
        const {products} = this.props;
        const {filterText, inStockOnly} = this.state;
        return (
            <div>
                <SearchBar
                    filterText={filterText}
                    inStockOnly={inStockOnly}
                    onInStockChange={this.handlerInStockChange}
                    onFilterTextChange={this.handleFilterTextChange}
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