import React from 'react';
import Products from '../Products/Products';

const Shop = () => {

    const products=[

        {name:'Lenovo Laptop', id:1},
        {name:'Toshiba Laptop', id:2},
        {name:'Dell Laptop', id:3},
        {name:'Doyle Laptop', id:4},
        {name:'Panasonic Laptop', id:5},
        {name:'Maximus Laptop', id:6},
        
    ]
    return (
        <div>
            <h2>This is shop</h2>

            {
                products.map(pd =><Products product={pd}></Products>)
            }
            
        </div>
    );
};

export default Shop;