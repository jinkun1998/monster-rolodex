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



// ============ hooks ============
import SearchBox from "./components/search-box/search-box.component"
import CardList from "./components/card-list/card-list.component"
import "./App.css"
import { useState } from "react"
import { useEffect } from "react"

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [searchString, setSearchString] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responses) => responses.json())
      .then((users) => setMonsters(users))
  }, [])


  const onSearchStringChange = (event) => {
    return setSearchString(event.target.value.toLocaleLowerCase())
  }

  useEffect(() => {
    const newFilteredMonsters = monsters
      .filter((monster) => monster.name.toLocaleLowerCase().includes(searchString))
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchString])

  return (
    <div className="App">
      <div className="app-title">Monster Rolodex</div>
      <SearchBox className="search-box" placeholder="type to search" onChangeHandler={onSearchStringChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App