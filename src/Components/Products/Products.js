import React from 'react';

const Products = (props) => {
    const {addToCart,product}=props;
    
    
    return (
        <div style={{border: '1px solid black',padding: '5px'}}>
            <h2>{product.name}</h2>
            <h5>{product.id}</h5>
            <button onClick={()=>addToCart(product.id)}>Add to cart</button>
            
        </div>
    );
};

export default Products;