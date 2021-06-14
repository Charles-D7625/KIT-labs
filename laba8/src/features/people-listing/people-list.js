import React from 'react';
import AddButton from './add-button'
import RemoveButton from './remove-button'
import { NavLink } from 'react-router-dom'; 

export default function ProductListItem(props) {
    return (
        <div className="List-item">
            <div className="List-item__name">{props.product.name.title} {props.product.name.first} {props.product.name.last}</div>
            
            <img
                className="List-item__image"
                height={100}
                title={props.product.picture.medium}
                src={props.product.picture.medium}
            />

            <AddButton
                friend={props.friend}
                product={props.product}
                addToFriends={props.addToFriends}
            />
            {
                props.friend
                    ? <RemoveButton
                        friend={props.friend}
                        product={props.product}
                        removeFromFriends={props.removeFromFriends}
                    />
                    : null
            }
            {
                props.friend
                    ? <NavLink to='/friend.list'>Добавить в друзья</NavLink>
                    : null
            }


        </div>
    )
}
