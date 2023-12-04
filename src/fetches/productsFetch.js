const url = 'https://dummyjson.com'

// get all products
export const fetchAllProducts = async (dispatch) => {
    try {
        const resp = await fetch(`${url}/products`)
        const data = await resp.json()
        // console.log(data);
        dispatch({ type: "FETCH_PRODUCTDS", payload: data.products })

    } catch (error) {
        console.log(error)
    }
}
// get products by category
export const getProductByCategory = async (cat,dispatch) => {
    try {
        const resp = await fetch(`${url}/products/category/${cat}`)
        const data = await resp.json()
        // console.log(data);
        dispatch({ type: "SELECT_CATEGORY", payload: data.products })

    } catch (error) {
        console.log(error)
    }
}
export const searchProduct = async (value,dispatch) => {
    try {
        // console.log(value);
        const resp = await fetch(`${url}/products/search?q=${value}`)
        const data = await resp.json()
        // console.log(data);
        dispatch({ type: "SEARCHING", payload: data.products })

    } catch (error) {
        console.log(error)
    }
}

