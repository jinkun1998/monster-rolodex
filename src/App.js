import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      keySearch: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((responses) => responses.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users }
        }))
  }

  onSearchChange = (event) => {
    return this.setState({ keySearch: event.target.value.toLocaleLowerCase() })
  }

  render() {
    const { monsters, keySearch } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(keySearch)
    })

    return (
      <div className="App">
        <input className="App-search" datatype="search" placeholder="type to search" onChange={onSearchChange} />

        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
