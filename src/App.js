import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        {/* <input
          type="search"
          placeholder="search monters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        /> */}
        <h1>Monster Rodolex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
