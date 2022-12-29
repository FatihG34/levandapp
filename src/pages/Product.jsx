import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {
    const { state } = useLocation()
    console.log(state)
    const { product } = state
    console.log(product);

    useEffect(() => {
        document.title = product.nutName + "- Levand Gıda Ltd."
    }, [product.nutName])

    return (
        <div>
            One Product
        </div>
    )
}

export default Product
