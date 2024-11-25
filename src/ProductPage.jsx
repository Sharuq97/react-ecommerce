import axios from 'axios';
import ProductCard from "./ProductCard";
import React, { useState, useEffect } from 'react'

export default function ProductPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const loadData = async () => {
            const response = await axios.get("products.json");
            setProducts(response.data);
        }
        loadData();

    }, [])

    const renderProductsV2 = () => {
        const jsxElements = products.map(function (p) {
            return <li key={p.id}>{p.name} ${p.price}</li>
        })
        return jsxElements;
    }

    const renderProducts = () => {
        const jsxElements = [];
        for (let p of products) {
            jsxElements.push(<li key={p.id}>
                {p.name} ${p.price}
            </li>);
        }
        return jsxElements;
    }
    /*
                {/*{renderProducts()}}
                {/*
                        (() => {
                            const jsxElements = [];
                            for (let p of products) {
                                jsxElements.push(<li key={p.id}>
                                    {p.name} ${p.price}
                                </li>)
                            }
                            return jsxElements;
                        })()
                    }}
    */
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Our Products</h1>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <ProductCard
                            id={product.id}
                            imageUrl={product.image}
                            productName={product.name}
                            price={product.price.toFixed(2)}
                            description={product.description}
                            category={product.category}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}