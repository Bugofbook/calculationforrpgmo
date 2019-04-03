import React from 'react';
import PropTypes from 'prop-types'
import MaterialItem from './MaterialItem'

const MaterialItemList = ({ items=[], onRemove=f=>f }) =>
    {
        return <div className="Item-list">
            {(items.length === 0) ?
                <p>No Items</p> :
                items.map(item => <MaterialItem key={item.id} {...item} onRemove={() => onRemove(item.id)} />)}
        </div>;
    }

MaterialItemList.propTypes = {
    items: PropTypes.array,
    onRemove: PropTypes.func
}

export default MaterialItemList