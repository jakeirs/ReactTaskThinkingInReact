import React from 'react';

import CategoryProductRow from './CategoryProductRow';
import ProductRow from './ProductRow';

const ProductTable = (props) => {

    /** Firstly the logic*/
    const rows = [];
    let lastCategory = null;

    props.products.forEach(product => {
        debugger;
       if (product.category !== lastCategory) {
           debugger;
           rows.push(
               <CategoryProductRow
                   category={product.category}
                   key={product.category} />
           );
       }
        debugger;
       rows.push(

           <ProductRow
                product={product}
                key={product.name} />
       );
        debugger;
       lastCategory = product.category;
    });

    /** Secondly just render output of the above logic */
    return (
       <table>
       <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
       </thead>
       <tbody>{rows}</tbody>
       </table>
    );
}

export default ProductTable;