import React from "react"


import "./search.css"


class SearchBox extends React.Component {
    state = {
        searchTerm: ""
        }


        onInputChange = (e) => {
        this.setState({
            searchTerm : e.target.value
        })

    }


    onFormSubmit = (e) => {
        if (!this.state.searchTerm) return;
        e.preventDefault()
        this.props.onSubmit(this.state.searchTerm)
        this.setState({
            searchTerm: ""
        })
  }


    render () {
        return (

        <form onSubmit={this.onFormSubmit} className="search">
          <input
            type="text"
            className="search__field"
            placeholder="Search recipes..."
            value = {this.state.searchTearm}
            onChange={this.onInputChange}
          />
          <button className="btn search__btn">
            <span>Search</span>
          </button>
        </form>

    )
}


}


export default SearchBox
