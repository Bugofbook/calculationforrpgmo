import React from 'react';
import PropTypes from 'prop-types'

const AddItemForm = ({onNewItem=f=>f}) => {

    let _title, _minLv, _minPr, _maxPr, _value, _exp

    const submit = e => {
        e.preventDefault()
        onNewItem(_title.value, _minLv.value, _minPr.value, _maxPr.value, _value.value, _exp.value)
        _title.value = ''
        _minLv.value = ''
        _minPr.value = ''
        _maxPr.value = ''
        _value.value = ''
        _exp.value = ''
        e.preventDefault()
    }

    return (
       <form className="add-Item" onSubmit={submit}>
       <table>
       <tbody>
       <tr>
              <td>物品名稱</td>
              <td><input ref={input => _title = input} type="text" placeholder="物品名稱" required/></td>
       </tr>
       <tr>
              <td>起始等級</td>
              <td><input ref={input => _minLv = input} type="number" placeholder="起始等級" required/></td>
       </tr>
       <tr>
              <td>下限機率</td>
              <td><input ref={input => _minPr = input} type="number" placeholder="下限機率" required/></td>
       </tr>
       <tr>
              <td>上限機率</td>
              <td><input ref={input => _maxPr = input} type="number" placeholder="上限機率" required/></td>
       </tr>
       <tr>
              <td>系統價格</td>
              <td><input ref={input => _value = input} type="number" placeholder="系統價格" required/></td>
       </tr>
       <tr>
              <td>經驗值</td>
              <td><input ref={input => _exp = input} type="number" placeholder="經驗值" required/></td>
       </tr>
       </tbody>
       </table>
       <button>ADD</button>
       </form>
    )

}

AddItemForm.propTypes = {
    onNewColor: PropTypes.func
}

export default AddItemForm