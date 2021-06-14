import React from "react";

export default function AddButton(props) {
  return (
    <button onClick={() => props.addToFriends(props.product)}>
      Добавить в друзья ({(props.friend && props.friend.quantity) || 0})
    </button>
  );
}
