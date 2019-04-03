import React from 'react';
import PropTypes from 'prop-types'

const ProductItem = ({ title, minLv, minPr, maxLv, maxPr, value, exp, onRemove=f=>f}) =>
    <section className="item">
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <p>Min Level:{minLv}，Min Pro:{minPr}</p>
        <p>Max Level:{maxLv}，Max Pro:{maxPr}</p>
        <p>Value:{value}，Exp:{exp}</p>
    </section>

ProductItem.propTypes = {
    title: PropTypes.string.isRequired,
    onRemove: PropTypes.func,
}

export default ProductItem