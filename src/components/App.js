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
