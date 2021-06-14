const listWithoutFriend = (cart, item) => cart.filter(friend => friend.id !== item.id)
const itemInCart = (cart, item) => cart.filter(friend => friend.id === item.id)[0]
const addToFriends = (cart, item) => {
    const friend = itemInCart(cart, item)
    return friend === undefined
        ? [...listWithoutFriend(cart, item), { ...item, quantity: 1 }]
        : [...listWithoutFriend(cart, item), { ...friend, quantity: friend.quantity + 1 }]
}

const removeFromFriends = (cart, item) => {
    return item.quantity === 1
        ? [...listWithoutFriend(cart, item)]
        : [...listWithoutFriend(cart, item), { ...item, quantity: item.quantity - 1 }]
}

const removeAllFromFriends = (cart, item) => {
    return [...listWithoutFriend(cart, item)]
}


const fReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return addToFriends(state, action.payload)

        case 'REMOVE':
            return removeFromFriends(state, action.payload)

        case 'REMOVE_ALL':
            return removeAllFromFriends(state, action.payload)

        default:
            return state;
    }
}

export default fReducer