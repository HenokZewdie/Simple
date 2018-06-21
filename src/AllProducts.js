import React from 'react'
import { Link } from 'react-router-dom'
import ProductAPI from "./api";

// Displays all products and create a link to their detail page.
const AllProducts = () => (
    <div>
        <ul>
            {
                ProductAPI.all().map(p => (
                    <li key={p.number}>
                        <Link to={`/product/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default AllProducts
