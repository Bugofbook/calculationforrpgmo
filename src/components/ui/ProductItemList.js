import React from 'react';
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'

const ProductItemList = ({ items=[], onRemove=f=>f }) =>
    <div className="Item-list">
        {(items.length === 0) ?
            <p>No Items</p> :
            items.map(item =>
                <ProductItem key={item.id}
                       {...item}
                       onRemove={() => onRemove(item.id)} />
            )
        }
    </div>

ProductItemList.propTypes = {
    items: PropTypes.array,
    onRemove: PropTypes.func
}

export default ProductItemList