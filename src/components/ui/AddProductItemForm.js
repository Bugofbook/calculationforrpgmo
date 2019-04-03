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
              <td>Item Name</td>
              <td><input ref={input => _title = input} type="text" placeholder="Item Name" required/></td>
       </tr>
       <tr>
              <td>Min Level</td>
              <td><input ref={input => _minLv = input} type="number" placeholder="Min Level" required/></td>
       </tr>
       <tr>
              <td>Min Pro</td>
              <td><input ref={input => _minPr = input} type="number" placeholder="Min Pro" required/></td>
       </tr>
       <tr>
              <td>Max Pro</td>
              <td><input ref={input => _maxPr = input} type="number" placeholder="Max Pro" required/></td>
       </tr>
       <tr>
              <td>Value</td>
              <td><input ref={input => _value = input} type="number" placeholder="Value" required/></td>
       </tr>
       <tr>
              <td>Exp</td>
              <td><input ref={input => _exp = input} type="number" placeholder="Exp" required/></td>
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