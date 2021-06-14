import React from 'react'
import { connect } from 'react-redux'



function Cart(props) {
    let totalItem = 0;
    let totalPrice = 0;
    return (
        <div>
            {
                props.cart[0]
                    ? <div className='Cart'>
                        <table className='Cart-table' border='1'>
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>name</th>
                                    <th>surname</th>
    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.cart.map(item => <tr>
                                        <td>{item.name.title}</td>
                                        <td>{item.name.first}</td>
                                        <td>{item.name.last}</td>
                                        <td>
                                            <button
                                                onClick={(e) => props.addToFriends(item)}
                                            >+</button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={(e) => props.removeFromFriends(item)}
                                            >-</button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={(e) => props.removeAllFromCart(item)}
                                            >Clear friend list</button>
                                        </td>

                                    </tr>)
                                }

                            </tbody>
                        </table>
                        
                        </div>
                   
                    : <div>No friends</div>
            }

        </div>

    )

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
        },
        removeAllFromCart: (item) => {
            dispatch({ type: 'REMOVE_ALL', payload: item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
