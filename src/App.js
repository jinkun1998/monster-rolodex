// ============ class component ============
// import "./App.css";
// import { Component } from "react";
// import SearchBox from "./components/search-box/search-box.component"
// import CardList from "./components/card-list/card-list.component"

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       keySearch: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((responses) => responses.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users }
//         }))
//   }

//   onSearchChange = (event) => {
//     return this.setState({ keySearch: event.target.value.toLocaleLowerCase() })
//   }

//   render() {
//     const { monsters, keySearch } = this.state
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(keySearch)
//     })

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           className="search-box"
//           placeholder="type to search"
//           onChangeHandler={onSearchChange} />

//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;
