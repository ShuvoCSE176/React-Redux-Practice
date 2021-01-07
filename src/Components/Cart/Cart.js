import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/actions/cartActions';

const Cart = (props) => {
    const { cart, removeFromCart } = props
    return (
        <div>
            <h3>This is cart</h3>

            {
                cart.map(id=><li>{id}<button onClick={()=>removeFromCart(id)}>X</button></li>)

            }
        </div>


    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);