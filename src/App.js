import React from 'react';
import axios from "axios"

import SearchBox from "./components/search"
import RecipeList from "./components/recipeList"
import Recipe from "./components/recipe"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            recipes: [],
            selectedRecipe: ""


        }
    }

    componentDidMount = () => {
        this.onSearchSubmit()
    }


    onSearchSubmit = async (searchTerm) => {

        const APP_ID = "36df039b"
        const APP_KEY = "9ac82316d8c27dd5b026ce3e92b34b40"

        const res = await axios.get(`https://api.edamam.com/search?q=${searchTerm}&app_id=${APP_ID }&app_key=${APP_KEY}`)
        // console.log(res);
        this.setState({
            recipes: res.data.hits
        })
    }

    onRecipeSelected = (recipe) => {
        console.log("recipe", recipe);
        this.setState({
            selectedRecipe: recipe.recipe
        })

    }

    render () {
        return (
          <div className="App">
          <div className="container">
            <header className="header">
              <h1 className="header__logo">Forkiffy</h1>


          <SearchBox
          onSubmit={this.onSearchSubmit}/>
          <div className="likes">
                <div className="likes__field">
                  <svg className="likes__icon">
                    <h1>LIKE</h1>
                  </svg>
                </div>
                <div className="likes__panel">
                  <ul className="likes__list">

                  </ul>
                </div>
              </div>
            </header>
            <RecipeList
            recipes={this.state.recipes}
            onRecipeSelected={(recipe) => this.onRecipeSelected(recipe)}/>
            <div className="recipe">
            <Recipe
            selectedRecipe={this.state.selectedRecipe}/>
            </div>
            </div>
          </div>
        );
    }

}

export default App;
