import React from 'react';

import CategoryProductRow from './CategoryProductRow';
import ProductRow from './ProductRow';

const ProductTable = (props) => {

    /** Firstly the logic
     * If category of current product is NOT the same add to row*/
    const rows = [];
    let lastCategory = null;

    props.products.forEach(product => {
       if (product.category !== lastCategory) {
           rows.push(
               <CategoryProductRow
                   category={product.category}
                   key={product.category} />
           );
       }
       rows.push(

           <ProductRow
                product={product}
                key={product.name} />
       );
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