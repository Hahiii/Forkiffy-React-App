import React from 'react';
import axios from "axios"



import SearchBox from "./components/search"
import RecipeList from "./components/recipeList"
import Recipe from "./components/recipe"
import ShoppingList from "./components/shoppingList"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            recipes: [],
            selectedRecipe: "",
            ingredients: ""


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
        // console.log("recipe", recipe);
        this.setState({
            selectedRecipe: recipe.recipe
        })

    }

    onIngredientsSelected = (ingredients) => {
        // console.log("onIngredientsSelected");
        // console.log("ingredients", ingredients);
        this.setState({
            ingredients: ingredients
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
            onIngredientsSelected ={(ingredients) => this.onIngredientsSelected(ingredients)}
            selectedRecipe={this.state.selectedRecipe}/>
            </div>
            <div className="shopping">
            <h2 class="heading-2">My Shopping List</h2>
            <ShoppingList ingredients={this.state.ingredients}/>
            </div>
            </div>
        
          </div>
        );
    }

}

export default App;
