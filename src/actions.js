import C from './constants'
import { v4 } from 'uuid'

export const addProductItem = ( title, minLv, minPr, maxPr, value, exp) =>({
    type: C.ADD_PRODUCTITEM,
    id: v4(),
    title,
    minLv,
    minPr ,
    maxLv: parseInt(maxPr,10) - parseInt(minPr,10) + parseInt(minLv,10) , 
    maxPr: maxPr / 100 ,
    value,
    exp,
    timestamp: new Date().toString()
})
export const addMaterialItem = ( title, amount, value) =>({
    type: C.ADD_MATERIALITEM,
    id: v4(),
    title,
    amount,
    value,
    timestamp: new Date().toString()
})
export const removeItem = id => ({
    type: C.REMOVE_ITEM,
    id
})
export const calculationResult = ( MaterialItems, ProductItems,nowlevel, targetlevel, nextexp) =>({
    type: C.CALCULATION_RESULT,
    MaterialItems,
    ProductItems,
    nowlevel,
    targetlevel,
    nextexp
})
export const clearResult = () => ({
    type: C.CLEAR_RESULT
})