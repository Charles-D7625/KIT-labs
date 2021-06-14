async function resp() {
  let responce = await fetch("https://randomuser.me/api/?results=10");
  let content = await responce.json();
  console.log(content.results);

  let gender = document.getElementById("gender");
  let name = document.getElementById("name");
  let city = document.getElementById("city");
  let email = document.getElementById("email");
  let registered = document.getElementById("registered");
  let phone = document.getElementById("phone");
  let picture = document.getElementById("picture");

  gender1.innerHTML = content.results[0].gender;
  picture1.src = content.results[0].picture.medium;
  name1.innerHTML =
    content.results[0].name.title +
    " " +
    content.results[0].name.last +
    " " +
    content.results[0].name.first;
  city1.innerHTML = content.results[0].location.city;
  email1.innerHTML = content.results[0].email;
  registered1.innerHTML =
    content.results[0].registered.date +
    " age: " +
    content.results[0].registered.age;
  phone1.innerHTML = content.results[0].phone;
  /*------------------------*/
  gender2.innerHTML = content.results[1].gender;
  picture2.src = content.results[1].picture.medium;
  name2.innerHTML =
    content.results[1].name.title +
    " " +
    content.results[1].name.last +
    " " +
    content.results[1].name.first;
  city2.innerHTML = content.results[1].location.city;
  email2.innerHTML = content.results[1].email;
  registered2.innerHTML =
    content.results[1].registered.date +
    " age: " +
    content.results[1].registered.age;
  phone2.innerHTML = content.results[1].phone;
  /*------------------------*/
  gender3.innerHTML = content.results[2].gender;
  picture3.src = content.results[2].picture.medium;
  name3.innerHTML =
    content.results[2].name.title +
    " " +
    content.results[2].name.last +
    " " +
    content.results[2].name.first;
  city3.innerHTML = content.results[2].location.city;
  email3.innerHTML = content.results[2].email;
  registered3.innerHTML =
    content.results[2].registered.date +
    " age: " +
    content.results[2].registered.age;
  phone3.innerHTML = content.results[2].phone;
  /*------------------------*/
  gender4.innerHTML = content.results[3].gender;
  picture4.src = content.results[3].picture.medium;
  name4.innerHTML =
    content.results[3].name.title +
    " " +
    content.results[3].name.last +
    " " +
    content.results[3].name.first;
  city4.innerHTML = content.results[3].location.city;
  email4.innerHTML = content.results[3].email;
  registered4.innerHTML =
    content.results[3].registered.date +
    " age: " +
    content.results[3].registered.age;
  phone4.innerHTML = content.results[3].phone;
  /*------------------------*/
  gender5.innerHTML = content.results[4].gender;
  picture5.src = content.results[4].picture.medium;
  name5.innerHTML =
    content.results[4].name.title +
    " " +
    content.results[4].name.last +
    " " +
    content.results[4].name.first;
  city5.innerHTML = content.results[4].location.city;
  email5.innerHTML = content.results[4].email;
  registered5.innerHTML =
    content.results[4].registered.date +
    " age: " +
    content.results[4].registered.age;
  phone5.innerHTML = content.results[4].phone;
  /*------------------------*/
  gender6.innerHTML = content.results[5].gender;
  picture6.src = content.results[5].picture.medium;
  name6.innerHTML =
    content.results[5].name.title +
    " " +
    content.results[5].name.last +
    " " +
    content.results[5].name.first;
  city6.innerHTML = content.results[5].location.city;
  email6.innerHTML = content.results[5].email;
  registered6.innerHTML =
    content.results[5].registered.date +
    " age: " +
    content.results[5].registered.age;
  phone6.innerHTML = content.results[5].phone;
  /*------------------------*/
  gender7.innerHTML = content.results[6].gender;
  picture7.src = content.results[6].picture.medium;
  name7.innerHTML =
    content.results[6].name.title +
    " " +
    content.results[6].name.last +
    " " +
    content.results[6].name.first;
  city7.innerHTML = content.results[6].location.city;
  email7.innerHTML = content.results[6].email;
  registered7.innerHTML =
    content.results[6].registered.date +
    " age: " +
    content.results[6].registered.age;
  phone7.innerHTML = content.results[6].phone;
  /*------------------------*/
  gender8.innerHTML = content.results[7].gender;
  picture8.src = content.results[7].picture.medium;
  name8.innerHTML =
    content.results[7].name.title +
    " " +
    content.results[7].name.last +
    " " +
    content.results[7].name.first;
  city8.innerHTML = content.results[7].location.city;
  email8.innerHTML = content.results[7].email;
  registered8.innerHTML =
    content.results[7].registered.date +
    " age: " +
    content.results[7].registered.age;
  phone8.innerHTML = content.results[7].phone;
  /*------------------------*/
  gender9.innerHTML = content.results[8].gender;
  picture9.src = content.results[8].picture.medium;
  name9.innerHTML =
    content.results[8].name.title +
    " " +
    content.results[8].name.last +
    " " +
    content.results[8].name.first;
  city9.innerHTML = content.results[8].location.city;
  email9.innerHTML = content.results[8].email;
  registered9.innerHTML =
    content.results[8].registered.date +
    " age: " +
    content.results[8].registered.age;
  phone9.innerHTML = content.results[8].phone;
  /*------------------------*/
  gender10.innerHTML = content.results[9].gender;
  picture10.src = content.results[9].picture.medium;
  name10.innerHTML =
    content.results[9].name.title +
    " " +
    content.results[9].name.last +
    " " +
    content.results[9].name.first;
  city10.innerHTML = content.results[9].location.city;
  email10.innerHTML = content.results[9].email;
  registered10.innerHTML =
    content.results[9].registered.date +
    " age: " +
    content.results[9].registered.age;
  phone10.innerHTML = content.results[9].phone;
}
resp();
