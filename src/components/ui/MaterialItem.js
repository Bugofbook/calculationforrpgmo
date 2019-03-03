import React from 'react';
import PropTypes from 'prop-types'

const MaterialItem = ({ id, title, amount, value, onRemove=f=>f}) =>
    <section className="item">
        <h1>第{id + 1}種原料</h1>
        <button onClick={onRemove}>X</button>
        <p>原料名稱:{title}</p>
        <p>原料用量:{amount}</p>
        <p>原料價格:{value}</p>
    </section>

MaterialItem.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number,
    onRemove: PropTypes.func,
}

export default MaterialItem