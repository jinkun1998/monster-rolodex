// ============ class component ============
// import { Component } from "react";
// import "./card-list.style.css"
// import Card from "../card/card-container.component"

// class CardList extends Component {
//     render() {
//         const { monsters } = this.props
//         return (
//             <div className="card-list">
//                 {
//                     monsters.map((monster) => {
//                         return (
//                             <Card monster={monster} />
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }

// export default CardList


// ============ hooks ============
import Card from "../card/card-container.component"
import "./card-list.style.css"

const CardList = ({ monsters }) => {
    return (
        <div className="card-list">
            {
                monsters.map((monster) => {
                    return <Card monster={monster} />
                })
            }
        </div>
    )
}

export default CardList