import React from "react"

import "./recipe.css"


const Recipe = ({selectedRecipe}) => {

    console.log(selectedRecipe);


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
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-stopwatch"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">{selectedRecipe.totalTime}</span>
            <span class="recipe__info-text"> minutes</span>
        </div>

        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-man"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">{selectedRecipe.yield}</span>
            <span class="recipe__info-text"> servings</span>
            <div class="recipe__info-buttons">
                <button class="btn-tiny btn-increase">
                    <svg>
                        <h3>+</h3>
                    </svg>
                </button>

            </div>
        </div>
        <button class="recipe__love">
            <svg>


                <h2 class="header__likes" >LIKE</h2>
            </svg>
        </button>
    </div>


    </div>
    // <div className="recipe__details">
    //     <div class="recipe__info">
    //         <svg class="recipe__info-icon">
    //             <use href="img/icons.svg#icon-stopwatch"></use>
    //         </svg>
    //         <span class="recipe__info-data recipe__info-data--minutes">${
    //           recipe.time
    //         }</span>
    //         <span class="recipe__info-text"> minutes</span>
    //     </div>

    //     <div class="recipe__info">
    //         <svg class="recipe__info-icon">
    //             <use href="img/icons.svg#icon-man"></use>
    //         </svg>
    //         <span class="recipe__info-data recipe__info-data--people">${
    //           recipe.servings
    //         }</span>
    //         <span class="recipe__info-text"> servings</span>
    //         <div class="recipe__info-buttons">
    //             <button class="btn-tiny btn-increase">
    //                 <svg>
    //                     <h3>+</h3>
    //                 </svg>
    //             </button>
    //             <button class="btn-tiny btn-decrease">
    //                 <svg>
    //                     <h3>-<h3>
    //                 </svg>
    //             </button>
    //         </div>
    //     </div>
    //     // <button class="recipe__love">
    //     //     <svg>
    //     //
    //     //
    //     //         <h2 class="header__likes" >LIKE</h2>
    //     //     </svg>
    //     // </button>
    // </div>


)


}


export default Recipe
