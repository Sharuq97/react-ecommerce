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
    return (<>
            <h1>Products</h1>




            <div className="row">
                { products.map(p => 
                <div className="col-12 col-md-4 col-lg-3" key={p.id}>
                <ProductCard
                
                    productName={p.name}
                    price={p.price}
                    imageUrl={p.image}
                    id={p.id}
                    description={p.description}
                    />
                    </div>
                )}

            </div>
            </>)
}