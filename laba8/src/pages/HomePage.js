import React from "react";
import PeopleListing from "../features/people-listing";

let data1;

async function FetchProducts() {
  const url = "https://randomuser.me/api/?results=10";
  const response = await fetch(url);
  data1 = await response.json();
  let products = JSON.stringify(data1.results);
  localStorage.setItem("data2", products);
}

FetchProducts();

export default function Homepage(props) {
  return (
    <div>
      <h2>User list</h2>
      <div>{}</div>
      <PeopleListing products={JSON.parse(localStorage.getItem("data2"))} />
    </div>
  );
}
