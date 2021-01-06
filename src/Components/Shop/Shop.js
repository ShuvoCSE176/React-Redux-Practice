import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/actions/cartActions';
import Products from '../Products/Products';

const Shop = (props) => {
    console.log(props);

    const {products,addToCart}=props;
    return (
        <div>
            <h2>This is shop</h2>

            {
                products.map(pd =><Products product={pd} addToCart={addToCart}
                 key={pd.id}>

                </Products>)
            }
            
        </div>
    );
};

const mapStateToProps = (state)=>{
    return {
        cart:state.cart, 
        products:state.products
    }

}

const mapDispatchToProps ={
    addToCart:addToCart
}

// const connectToStore =connect(mapStateToProps,mapDispatchToProps);

// connect(mapStateToProps,mapDispatchToProps)(Shop)

export default connect(mapStateToProps,mapDispatchToProps)(Shop);