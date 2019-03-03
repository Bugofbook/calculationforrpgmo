import {createStore, combineReducers, applyMiddleware } from 'redux'
import {ProductItems, MaterialItems, Calresult} from './Reducers'
import stateData from '../data/initialState.json'

/*
因為學不會使用HOC,這裡的程式碼是照抄
https://github.com/MoonHighway/learning-react/blob/master/chapter-09/color-organizer/src/store/index.js
*/

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({MaterialItems, ProductItems, Calresult}),
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            initialState
    )

export default storeFactory