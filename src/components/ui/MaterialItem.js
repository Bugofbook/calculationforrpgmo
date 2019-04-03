import React from 'react';
import PropTypes from 'prop-types'

const MaterialItem = ({ id, title, amount, value, onRemove=f=>f}) =>
    <section className="item">
        <h1>the {id + 1}-th Material</h1>
        <button onClick={onRemove}>X</button>
        <p>Matherial Name:{title}</p>
        <p>Matherial Demand:{amount}</p>
        <p>Matherial Value:{value}</p>
    </section>

MaterialItem.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number,
    onRemove: PropTypes.func,
}

export default MaterialItem