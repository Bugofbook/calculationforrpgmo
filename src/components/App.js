import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from "react-bootstrap";

import { NewMaterialItem, NewProductItem, MaterialItems, ProductItems, Calculation, ShowItem} from './containers';
import '../stylesheets/App.css'

const App = () => 
<Container>
<Row>
  <Col lg={6}>
    <Row><NewMaterialItem /></Row>
    <Row><NewProductItem /></Row>
    <Row><Calculation /></Row>
    <Row><ShowItem /></Row>
  </Col>
  <Col lg={3}>
    <p>材料</p>
    <MaterialItems />
  </Col>
  <Col lg={3}>
    <p>成品</p>
    <ProductItems />
  </Col>
</Row>
</Container>

export default App;
