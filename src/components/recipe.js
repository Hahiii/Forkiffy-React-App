import React from "react"

import uniqid from "uniqid";



import "./recipe.css"


const Recipe = ({selectedRecipe, onIngredientsSelected}) => {

    let selectedRecipeArray = []
    for (let keys in selectedRecipe.ingredientLines) {
        selectedRecipeArray[keys] = selectedRecipe.ingredientLines[keys]

    }

    let healthLabels = []
    for (let keys in selectedRecipe.healthLabels) {
        healthLabels[keys] = selectedRecipe.healthLabels[keys]

    }


    let addIngredients =  () => {
    const item = {
        ingredients: selectedRecipeArray.map(ingredient => {
            return ingredient = {
                 ingredient : ingredient,
                 id : uniqid()
            }
        })
    }

    return item.ingredients
 }




return (
    <div>
    <div className="recipe__fig">
        <img src={selectedRecipe.image} alt={selectedRecipe.label} className="recipe__img"/>
        <h1 className="recipe__title">
            <span>{selectedRecipe.label}</span>
        </h1>
    </div>
    <div className="recipe__details">
        <div class="recipe__info">
            <svg className="recipe__info-icon">
                <use href="img/icons.svg#icon-stopwatch"></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--minutes">{healthLabels.map(healthLabel => {
                return (
                    <div>
                    {healthLabel}
                    </div>
                )
            })}</span>

        </div>

        <div className="recipe__info">
            <svg className="recipe__info-icon">
                <use href="img/icons.svg#icon-man"></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--people">{selectedRecipe.yield}</span>
            <span className="recipe__info-text"> servings</span>
            <div className="recipe__info-buttons">
            </div>
        </div>
        <button className="recipe__love">
            <div>
                <h2 className="header__likes">LIKE</h2>
            </div>
        </button>
    </div>
    <div className="recipe__ingredients">
    <ul className="recipe__ingredient-list">
    {selectedRecipeArray.map(ingredients => {
        return (
            <li className="recipe__item">
    <svg className="recipe__icon">
        <use href="img/icons.svg#icon-check"></use>
    </svg>
    <div className="recipe__count"></div>
    <div className="recipe__ingredient">
        <span className="recipe__unit">{ingredients}</span>

    </div>
</li>
        )
    })}
    </ul>

    <button onClick={(item) => onIngredientsSelected(addIngredients(item))} className="btn-small recipe__btn--add">
        <span>Add to shopping list</span>
    </button>
</div>
<div className="recipe__directions">
    <h2 className="heading-2">How to cook it</h2>
    <p className="recipe__directions-text">
        Please check out directions at their website.
    </p>
    <a className="btn-small recipe__btn" href={selectedRecipe.url} target="_blank">
        <span >Directions</span>
    </a>
</div>

    </div>

)


}


export default Recipe
