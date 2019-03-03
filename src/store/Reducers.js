import C from '../constants' ;
import { WorkingCount , GetProductAmount , GetMaterialAmount } from '../functions/FunctionForRPGMO' ;

export const ProductItem = (state={}, action) => {
    switch (action.type) {
        case C.ADD_PRODUCTITEM:
        return {
            id: action.id,
            title: action.title,
            minLv: action.minLv,
            minPr: action.minPr / 100 ,
            maxLv: parseInt(action.maxPr,10) - parseInt(action.minPr,10) + parseInt(action.minLv,10) , 
            maxPr: action.maxPr / 100 ,
            value: action.value,
            exp: action.exp
        }
        default :
        return state
    
    }
}
export const ProductItems = (state={}, action) => {
    switch (action.type) {
        case C.ADD_PRODUCTITEM:
            return [
                ...state,
                ProductItem({},action)
            ]
        case C.REMOVE_ITEM:
            return state.filter(item => item.id !== action.id)
        default :
            return state
    }
}
export const MaterialItem = (state={}, action) => {
    switch (action.type) {
        case C.ADD_MATERIALITEM:
        return {
            id: action.id,
            title: action.title,
            amount: action.amount,
            value: action.value
        }
        default :
        return state
    }
}
export const MaterialItems = (state={}, action) => {
    switch (action.type) {
        case C.ADD_MATERIALITEM:
        return [
            ...state,
            MaterialItem({},action)
        ]
        case C.REMOVE_ITEM:
        return state.filter(item => item.id !== action.id)
        default :
        return state
    }
}
export const Calresult = (state={}, action) => {
    switch (action.type) {
        case C.CALCULATION_RESULT:
        {
            let productitems = action.productitems
            let materialitems = action.materialitems
            let totalAmount = WorkingCount(productitems,action.nextexp,action.nowlevel,action.targetlevel)
            let productAmounts = GetProductAmount(productitems,action.nextexp,action.nowlevel,action.targetlevel)
            let needAmounts = materialitems.map( item => item.amount)
            let materialAmounts = GetMaterialAmount(needAmounts,totalAmount)
            return {
                    productNames: productitems.map(item => item.title),
                    materialNames: materialitems.map( item => item.title),
                    productValues: productitems.map( item => item.value),
                    materialValues: materialitems.map( item => item.value),
                    needAmounts: needAmounts,
                    totalAmount: totalAmount,
                    productAmounts: productAmounts,
                    materialAmounts: materialAmounts
                   }
        }
        case C.CLEAR_RESULT:
            return {}
        default :
            return state
    }
}