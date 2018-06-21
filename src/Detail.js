
import React from 'react'
import ProductAPI from './api'
import { Link } from 'react-router-dom'

//This component will display the detailed result for the selected product
const canonical = window.location.href;

const Detail = (props) => {
    const product = ProductAPI.get(
        parseInt(props.match.params.number, 10)
    )
    if (!product) {
        return <div>Product was not found</div>
    }
    return (

        <div>
            <link rel="canonical" href={canonical} />
            <h1>Brand Name is: {product.name}</h1>
            <h1>Product ID: {product.number}</h1>
            <h2>Model Number started at: {product.modelNo}</h2>

            <h1><Link to='/Product'>Back</Link></h1>
        </div>
    )
}

export default Detail
