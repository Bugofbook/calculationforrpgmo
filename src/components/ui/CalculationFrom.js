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
              <td>現在技能等級</td>
              <td><input ref={input => _nowlevel = input} type="number" placeholder="起始等級" required/></td>
       </tr>
       <tr>
              <td>目標技能等級</td>
              <td><input ref={input => _targetlevel = input} type="number" placeholder="目標等級" required/></td>
       </tr>
       <tr>
              <td>升級所需經驗</td>
              <td><input ref={input => _nextexp = input} type="number" placeholder="下個等級所需經驗值" required/></td>
       </tr>
       </tbody>
       </table>
              <button>計算結果</button>
       </form>
    )

}

CalculationForm.propTypes = {
       onCalculation: PropTypes.func
}

export default CalculationForm