
import { connect } from 'react-redux';

function Busqet(props) {
    let totalItem = 0;
    props.cart.map(item => totalItem = totalItem + item.quantity)
    return props.cart[0]
        ? totalItem
        : 0
}



function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToFriends: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromFriends: (item) => {
            dispatch({ type: 'REMOVE', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Busqet)
