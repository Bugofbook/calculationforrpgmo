import React from 'react';
import PropTypes from 'prop-types'

const ProductItem = ({ title, minLv, minPr, maxLv, maxPr, value, exp, onRemove=f=>f}) =>
    <section className="item">
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <p>下限等級:{minLv}，下限機率:{minPr}</p>
        <p>上限等級:{maxLv}，上限機率:{maxPr}</p>
        <p>系統價格:{value}，經驗值:{exp}</p>
    </section>

ProductItem.propTypes = {
    title: PropTypes.string.isRequired,
    onRemove: PropTypes.func,
}

export default ProductItem