export const addToCart = (product) => {
    return (dispatch, getState) => {
        dispatch({
            type: "CART_ADD_ITEM",
            payload: {
                name: product.name,
                image: product.image,
                price: product.price,
                id: product._id
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    };
};

export const removeToCart = (product) => {
    return (dispatch, getState) => {
        dispatch({
            type: "CART_REMOVE_ITEM",
            payload: {
                name: product.name,
                image: product.image,
                price: product.price,
                id: product.id
            }
        });
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    };
};
