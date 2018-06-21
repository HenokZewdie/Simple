import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Detail from './Detail'
import AllProducts from "./AllProducts";

//The Product Component has route path and dynamic url for the detailed
const Product = () => (
    <Switch>
        <Route exact path='/product' component={AllProducts}/>
        <Route path='/product/:number' component={Detail}/>
    </Switch>
)

export default Product
