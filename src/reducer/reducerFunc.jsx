export const reduserFunc = (state, action) => {
    if (action.type === "FETCH_PRODUCTDS") return { ...state, products: action.payload }

    if (action.type === "SELECT_CATEGORY") return { ...state, products: action.payload }

    if (action.type === "SEARCHING") return { ...state, products: action.payload }

    if (action.type === "UPDATE_CART") return { ...state, cart: action.payload }
    
    if (action.type === "UPDATE_WISHLIST") return { ...state, wishlist: action.payload }
}