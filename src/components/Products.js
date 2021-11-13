import React, { useContext } from 'react';
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

export default function Products(props) {

    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart;

    return (
        <section>
            <div className="products">
                {
                    products.map(product => (
                        <div className="products-card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.image} alt="cover-pic" />
                            </Link>
                            <div className="products-content">
                                <h3 title={product.title}>
                                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                                </h3>
                                <p className="products-desc">{product.description}</p>
                                <p className="products-price">&#8377; {product.price}</p>
                                <button onClick={() => addCart(product.id)}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
