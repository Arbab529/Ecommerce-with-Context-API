import React, { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductContext'
import { Link } from 'react-router-dom'
import { BsPlus, BsEyeFill } from 'react-icons/bs'

const Product = ({ product }) => {
    const { products } = useContext(ProductsContext)

    const { id, image, category, title, price } = product;
    return (
        <div className="w-full" >

        </div>
    )
}

export default Product