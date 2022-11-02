// ============ class component ============
// import { Component } from "react";
// import "./search-box.style.css"

// class SearchBox extends Component {
//     render() {
//         const { className, placeholder, onChangeHandler } = this.props
//         return (
//             <input
//                 className={className}
//                 datatype="search"
//                 placeholder={placeholder}
//                 onChange={onChangeHandler} />
//         )
//     }
// }

// export default SearchBox

import "./search-box.style.css"

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
    return (
        <input
            className={className}
            datatype="search"
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    )
}

export default SearchBox