
const getStoreCart = () => {
    const storeCartString = localStorage.getItem('cart');
    if(storeCartString){
        return JSON.parse(storeCartString);
    }
    return [];
}

const saveCartLS = cart =>{
    const cartSting = JSON.stringify(cart);
    localStorage.setItem('cart', cartSting)
}

const addToLS = id =>{
    const cart = getStoreCart()
    cart.push(id);

    // save to local storage 

    saveCartLS(cart);
}

export {addToLS , getStoreCart}