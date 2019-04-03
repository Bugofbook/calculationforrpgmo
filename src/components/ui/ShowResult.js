import React from 'react';
import PropTypes from 'prop-types'

const Showresult = ({ calresult={}, onclearResult=f=>f}) =>
    {
        const { productNames, materialNames, productValues, materialValues, needAmounts, totalAmount, productAmounts, materialAmounts } = calresult;
        return ( Object.keys(calresult) <= 0 ) ?
                <p></p> :
                <section className="item">
                    <p>Production Order:{productNames.join(" => ")}</p>
                    <p>Formula:{materialNames.map((item, i ) => `${item} need ${needAmounts[i]} `).join(", ")}</p>
                    <p>Total Production Times:{totalAmount}</p>
                    <p>Production List:{productNames.map((item, i ) => `${item} produce ${productAmounts[i]} piece with ${productValues[i] * productAmounts[i]} Coins`).join(", ")}</p>
                    <p>Material List:{materialNames.map((item, i ) => `${item} need ${materialAmounts[i]} piece with ${materialValues[i] * materialAmounts[i]} Coins`).join(", ")}</p>
                    <button onClick={onclearResult}>Clear</button>
                </section>
    }

Showresult.propTypes = {
    calresult: PropTypes.object,
}


export default Showresult