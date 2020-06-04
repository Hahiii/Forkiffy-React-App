import React from "react"


import "./recipeList.css"

const RecipeList = ({recipes, onRecipeSelected}) => {


const limitrecipeTitle = (title, limit = 17) => {
    let newTitle = []
    if (title.length > limit) {
        title.split(" ").reduce((acc, curr) => {
            if (acc + curr.length <= limit) {
                newTitle.push(curr)
            }
            return acc + curr.length
        }, 0)
        return `${newTitle.join(" ")} ...`
    }
return title

}


return (
    <div class="results">
        <ul class="results__list">
    <li >

    {recipes.map(recipe => {
        return (
            <div key={recipe.recipe.label}>
            <div onClick={() => onRecipeSelected(recipe)} class="results__link">
            <div className="results__fig">
            <img src={recipe.recipe.image}/>
            </div>
            <div className="results__data">
            <h4 className="results__name">{limitrecipeTitle(recipe.recipe.label)}</h4>
            <p className="results__author">{recipe.recipe.source}</p>
            </div>
            </div>

            </div>
        )
    })}
    </li>
    </ul>
    </div>
    )

}

export default RecipeList
