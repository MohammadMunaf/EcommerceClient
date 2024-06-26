export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case "CART_ADD_ITEM":
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.id === item.id);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.id === existItem.id ? item : x),
                }
            } else {
                return { ...state, cartItems: [...state.cartItems, item] };
            }
        case "CART_REMOVE_ITEM":
            const removedProduct = action.payload;
            return { ...state, cartItems: state.cartItems.filter(x=>x.id!==removedProduct.id) };
        default:
            return state;
    }
}