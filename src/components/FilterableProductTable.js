import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputTextValue: '',
            inputCheckboxValue: false
        }
    }

    render() {
        const {products} = this.props;
        // const {inputTextValue, inputCheckboxValue} = this.state;
        return (
            <div>
                <SearchBar
                />
                <ProductTable products={products}/>
            </div>
        );
    }
}

export default FilterableProductTable;