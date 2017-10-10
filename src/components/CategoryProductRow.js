import React from 'react';

const CategoryProductRow = (props) => {
    const { category } = props;
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

export default CategoryProductRow;