import React from 'react'
import { NewMaterialItem, NewProductItem, MaterialItems, ProductItems, Calculation, ShowItem} from './containers';
import '../stylesheets/App.css'

const App = () => 
<div className="app" >
  <div>
    <NewMaterialItem />
    <NewProductItem />
    <Calculation />
    <ShowItem />
  </div>
  <div>
    <MaterialItems />
  </div>
  <div>
    <ProductItems />
  </div>
</div>

export default App;



/*
//舊版
import React, { Component } from 'react';
import './App.css';
import AddProductItemForm from './AddProductItemForm';
import AddMaterialItemForm from './AddMaterialItemForm';
import ProductItemList from './ProductItemList';
import MaterialItemList from './MaterialItemList';
import Showresult from './ShowResult'
import CalculationForm from './CalculationFrom' ;
import { WorkingCount , GetProductAmount , GetMaterialAmount } from '../functions/FunctionForRPGMO' ;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        materialitems: [{
          id: 0,
          title: "coal",
          amount: 1,
          value: 500,
        },
        {
          id: 1,
          title: "iron orc",
          amount: 1,
          value: 180,
        }],
        productitems: [{
          id: 0,
          title: "steel bar",
          minLv: 40,
          minPr: 0.4,
          maxLv: 100 , 
          maxPr: 1,
          value: 960,
          exp: 30,
        }],
        calresult: {
          nowlevel: 100,
          targetlevel: 110,
          nextexp: 100,
        }
    }
    this.addProductItem = this.addProductItem.bind(this)
    this.addMaterialItem = this.addMaterialItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.calculationResult = this.calculationResult.bind(this)
    this.clearResult = this.clearResult.bind(this)
  }
  
  addProductItem( title, minLv, minPr, maxPr, value, exp) {
    let olditems = this.state.productitems
    const newitems = [
      ...olditems,
      {
          id: olditems.length,
          title,
          minLv,
          minPr: minPr / 100 ,
          maxLv: parseInt(maxPr,10) - parseInt(minPr,10) + parseInt(minLv,10) , 
          maxPr: maxPr / 100 ,
          value,
          exp,
      }
    ]
    this.setState({productitems: newitems})
  }
  addMaterialItem(title, amount ,value) {
    let olditems = this.state.materialitems
    const newitems = [
      ...olditems,
      {
          id: olditems.length,
          title,
          amount,
          value,
      }
    ]
    this.setState({materialitems: newitems})
  }
  removeItem(no, items, id) {
    const Newitems = items.filter(item => item.id !== id)
    if (no === 1)
    {
      this.setState({materialitems: Newitems })
    }
    else
    {
      this.setState({productitems: Newitems })
    }
  }
  calculationResult(nowlevel, targetlevel, nextexp) {    
    let productitems = this.state.productitems
    let materialitems = this.state.materialitems
    let totalAmount = WorkingCount(productitems,nextexp,nowlevel,targetlevel)
    let productAmounts = GetProductAmount(productitems,nextexp,nowlevel,targetlevel)
    let needAmounts = materialitems.map( item => item.amount)
    let materialAmounts = GetMaterialAmount(needAmounts,totalAmount)
    this.setState({calresult: {
      productNames: productitems.map(item => item.title),
      materialNames: materialitems.map( item => item.title),
      productValues: productitems.map( item => item.value),
      materialValues: materialitems.map( item => item.value),
      needAmounts: needAmounts,
      totalAmount: totalAmount,
      productAmounts: productAmounts,
      materialAmounts: materialAmounts
     } })
  }
  clearResult() {
    this.setState({calresult: {} })
  }

  render() {
    const {addProductItem, addMaterialItem, removeItem, calculationResult, clearResult} = this
    const { materialitems, productitems, calresult} = this.state
    return (
      <div className="App">
        <div>
          <AddMaterialItemForm onNewItem={addMaterialItem} />
          <AddProductItemForm onNewItem={addProductItem} />
          {
            ((materialitems.length === 0) || (productitems.length === 0)) ?
            <p></p> :
            <CalculationForm onCalculation={calculationResult} />
          }
          {(calresult.length === 0 ) ? <p></p> : <button onClick={clearResult}>清除結果</button> }
          <Showresult calresult={calresult} />
        </div>
        <div>
          <MaterialItemList items={materialitems} key={1} onRemove={(id) => removeItem(1, materialitems, id)} />
        </div>
        <div>
          <ProductItemList items={productitems} key={2} onRemove={(id) => removeItem(2, productitems, id)} />
        </div>
      </div>
    );
  }

}

export default App;

*/