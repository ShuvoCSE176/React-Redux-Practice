import React from 'react';

const Products = (props) => {
    const {name,id}=props.product;
    return (
        <div style={{border: '1px solid black',padding: '5px'}}>
            <h2>{name}</h2>
            <h5>{id}</h5>
            <button>Add to cart</button>
            
        </div>
    );
};

export default Products;