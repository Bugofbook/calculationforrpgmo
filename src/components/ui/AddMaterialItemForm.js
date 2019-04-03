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
              <td>Item Name</td>
              <td><input ref={input => _title = input} type="text" placeholder="Item Name" required/></td>
       </tr>
       <tr>
              <td>Demand</td>
              <td><input ref={input => _amount = input} type="number" placeholder="Demand" required/></td>
       </tr>
       <tr>
              <td>Value</td>
              <td><input ref={input => _value = input} type="number" placeholder="Value" required/></td>
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