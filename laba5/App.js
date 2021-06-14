import React from "react";
import "./app.css";
import loading from "./load.gif";
let i = 0;
export default class Fetch extends React.Component {
  state = {
    loading: true,
    person: []
  };

  handleClick = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ loading: false, person: result.results[0] });
        console.log(result.results);
      });
  };

  render() {
    const { loading, person } = this.state;
    if (loading) {
      return (
        <div align="center">
          <Preloader />
          <Button onClick={this.handleClick} label={"Dowload API"} />
        </div>
      );
    } else {
      return (
        <div align="center">
          {" "}
          <div className="card" align="center">
            <UserAvatar src={person.picture.large} width={200} height={200} />
            <UserCard
              title={person.name.title}
              first={person.name.first}
              last={person.name.last}
              email={person.email}
              date={person.dob.date}
              age={person.dob.age}
              phone={person.phone}
            />
            <Button onClick={this.handleClick} label={"Next API"} />
          </div>
        </div>
      );
    }
  }
}

class UserAvatar extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.src}
          width={this.props.width}
          height={this.props.height}
        />
      </div>
    );
  }
}

class UserCard extends React.Component {
  render() {
    return (
      <div>
        <p>
          FullName: {this.props.title} {this.props.first} {this.props.last}
        </p>
        <p>Email: {this.props.email}</p>
        <p>Date: {this.props.date}</p>
        <p>Age: {this.props.age}</p>
        <p>Phone: {this.props.phone}</p>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <div>
        <button className="button" onClick={this.props.onClick}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

class Preloader extends React.Component {
  render() {
    return (
      <div>
        <img src={loading} />
      </div>
    );
  }
}
