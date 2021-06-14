import React from 'react'

export default function RemoveButton(props) {
    return <button
        onClick={() => props.removeFromFriends(props.friend)}
    >Remove </button>
}