import React from 'react';
import PropTypes from 'prop-types'

const AddMaterialItemForm = ({onNewItem=f=>f}) => {

    let _title, _amount ,_value

    const submit = e => {
        e.preventDefault()
        onNewItem(_title.value, _amount.value, _value.value)
        _title.value = ''
        _amount.value = ''
        _value.value = ''
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
              <td>需求量</td>
              <td><input ref={input => _amount = input} type="number" placeholder="需求量" required/></td>
       </tr>
       <tr>
              <td>系統價格</td>
              <td><input ref={input => _value = input} type="number" placeholder="系統價格" required/></td>
       </tr>
       </tbody>
       </table>
       <button>ADD</button>
       </form>
    )

}

AddMaterialItemForm.propTypes = {
    onNewColor: PropTypes.func
}

export default AddMaterialItemForm