import React from 'react';
import PropTypes from 'prop-types'


const CalculationForm = ({onCalculation=f=>f}) => {

    let _nowlevel, _targetlevel, _nextexp

    const submit = e => {
        e.preventDefault()
        onCalculation(_nowlevel.value, _targetlevel.value, _nextexp.value)
        e.preventDefault()
    }

    return (
       <form className="add-Item" onSubmit={submit}>
       <table>
       <tbody>
       <tr>
              <td>Now Level</td>
              <td><input ref={input => _nowlevel = input} type="number" placeholder="Target Level" required/></td>
       </tr>
       <tr>
              <td>Target Level</td>
              <td><input ref={input => _targetlevel = input} type="number" placeholder="Target Level" required/></td>
       </tr>
       <tr>
              <td>Next Exp</td>
              <td><input ref={input => _nextexp = input} type="number" placeholder="Next Exp" required/></td>
       </tr>
       </tbody>
       </table>
              <button>Calculate</button>
       </form>
    )

}

CalculationForm.propTypes = {
       onCalculation: PropTypes.func
}

export default CalculationForm