import React from 'react';
import PropTypes from 'prop-types'

const Showresult = ({ calresult={}, onclearResult=f=>f}) =>
    {
        const { productNames, materialNames, productValues, materialValues, needAmounts, totalAmount, productAmounts, materialAmounts } = calresult;
        return ( Object.keys(calresult) <= 0 ) ?
                <p></p> :
                <section className="item">
                    <p>生產順序:{productNames.join(" => ")}</p>
                    <p>原料名單:{materialNames.map((item, i ) => `${item}需要${needAmounts[i]}個`).join(", ")}</p>
                    <p>總生產次數:{totalAmount}</p>
                    <p>成品總生產量:{productNames.map((item, i ) => `${item}生產${productAmounts[i]}個共${productValues[i] * productAmounts[i]}元`).join(", ")}</p>
                    <p>原料總需求量:{materialNames.map((item, i ) => `${item}需要${materialAmounts[i]}個共${materialValues[i] * materialAmounts[i]}元`).join(", ")}</p>
                    <button onClick={onclearResult}>清除結果</button>
                </section>
    }

Showresult.propTypes = {
    calresult: PropTypes.object,
}


export default Showresult