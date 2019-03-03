import { connect } from 'react-redux'
import AddProductItemForm from './ui/AddProductItemForm';
import AddMaterialItemForm from './ui/AddMaterialItemForm';
import ProductItemList from './ui/ProductItemList';
import MaterialItemList from './ui/MaterialItemList';
import Showresult from './ui/ShowResult'
import CalculationForm from './ui/CalculationFrom' ;
import { addMaterialItem, addProductItem, removeItem, calculationResult, clearResult} from '../actions'

export const NewMaterialItem = connect(
    null,
    dispatch => ({
        onNewItem(title, amount, value) {
            dispatch(addMaterialItem(title, amount, value))
        }
    })
)(AddMaterialItemForm)

export const NewProductItem = connect(
    null,
    dispatch => ({
        onNewItem(title, minLv, minPr, maxPr, value, exp) {
            dispatch(addProductItem(title, minLv, minPr, maxPr, value, exp))
        }
    })
)(AddProductItemForm)

export const MaterialItems = connect(
    state => ({
        items: [...state.MaterialItems]
    }),
    dispatch =>
    ({
        onRemove(id) {
            dispatch(removeItem(id))
        }
    })
)(MaterialItemList)


export const ProductItems = connect(
    state => ({
        items: [...state.ProductItems]
    }),
    dispatch => 
    ({
        onRemove(id) {
            dispatch(removeItem(id))
        }
    })
)(ProductItemList)

export const Calculation = connect(
    null,
    dispatch =>({
        onCalculation(nowlevel, targetlevel, nextexp) {
            dispatch(calculationResult(nowlevel, targetlevel, nextexp))
        }
    })
)(CalculationForm)

export const ShowItem = connect(
    state => ({
        calresult: state.calresult
    }),
    dispatch =>({
        onclearResult() {
            dispatch(clearResult())
        }
    })
)(Showresult)